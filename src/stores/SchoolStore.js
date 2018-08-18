import { EventEmitter } from "events";
import dispatcher from "../AppDispatcher";
const AppConstants = require("../constants/AppConstants");

class SchoolStore extends EventEmitter {
  constructor() {
    super()
    this.item = {};
  }

  getItem() {
    return this.item;
  }

  handleActions(action) {
    switch(action.type) {
      case AppConstants.SCHOOL_RECEIVE: {
        this.item = action.item;
        this.emit(AppConstants.CHANGE_EVENT);
        break;
      }
      default:
        return;
    }
  }
}

const store = new SchoolStore();
dispatcher.register(store.handleActions.bind(store));

export default store;
