import { EventEmitter } from "events";
import dispatcher from "../AppDispatcher";
const AppConstants = require("../constants/AppConstants");

class ContactStore extends EventEmitter {
  constructor() {
    super()
    this.items = [];
  }

  getAll() {
    return this.items;
  }

  getById(id) {
    const item = this.items.find( x => x._id === id );
    return item;
  }

  create(item) {
    this.items.push(item);
    this.emit(AppConstants.CHANGE_EVENT);
  }

  update(item) {
    const index = this.items.indexOf(x => x._id === item._id);
    this.items[index] = item;
    this.emit(AppConstants.CHANGE_EVENT);
  }

  delete(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
    this.emit(AppConstants.CHANGE_EVENT);
  }

  handleActions(action) {
    switch(action.type) {
      case AppConstants.CONTACT_RECEIVE: {
        this.items = action.items;
        this.emit(AppConstants.CHANGE_EVENT);
        break;
      }
      case AppConstants.CONTACT_CREATE: {
        this.create(action.item);
        break;
      }
      case AppConstants.CONTACT_UPDATE: {
        this.update(action.item);
        break;
      }
      case AppConstants.CONTACT_DELETE: {
        this.delete(action.item);
        break;
      }
      default:
        return;
    }

  }
}

const store = new ContactStore();
dispatcher.register(store.handleActions.bind(store));

export default store;
