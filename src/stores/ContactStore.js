'use strict'
import { EventEmitter } from "events";
import dispatcher from "../AppDispatcher";
const AppConstants = require("../constants/AppConstants");
const CHANGE_EVENT = 'change';

class ContactStore extends EventEmitter {
  constructor() {
    super()
    this.items = null;
  }

  getAll() {
    return this.items;
  }

  create(item) {
    this.items.push(item);
    this.emit(CHANGE_EVENT);
  }

  delete(item) {
    const index = this.items.indexOf(item);

    if (index !== -1) {
        this.items.splice(index, 1);
    }
    this.emit(CHANGE_EVENT);
  }

  handleActions(action) {
    switch(action.type) {
      case AppConstants.RECEIVE_CONTACT: {
        this.items = action.items;
        this.emit(CHANGE_EVENT);
        break;
      }
      case AppConstants.CONTACT_CREATE: {
        this.create(action.item);
        break;
      }
      case AppConstants.CONTACT_DELETE: {
        this.delete(action.item);
        break;
      }
    }
  }
}

const contactStore = new ContactStore;
dispatcher.register(contactStore.handleActions.bind(contactStore));

export default contactStore;
