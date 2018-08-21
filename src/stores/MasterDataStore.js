import { EventEmitter } from "events";
import dispatcher from "../AppDispatcher";
const AppConstants = require("../constants/AppConstants");

class MasterDataStore extends EventEmitter {
  constructor() {
    super()
    this.error = false;
    this.rooms = [];
    this.levels = [];
    this.departments = [];
  }

  isSuccessed () {
    return !this.error;
  }

  // --------------------------------------------------
  // ROOM MODULE
  // --------------------------------------------------
  getRooms() {
    return this.rooms;
  }

  getRoomById(id) {
    const item = this.rooms.find( x => x._id === id );
    return item;
  }

  createRoom(item) {
    this.rooms.splice(0, 0, item);
    this.emit(AppConstants.CHANGE_EVENT);
  }

  updateRoom(item) {
    const index = this.rooms.findIndex(x => x._id === item._id);
    this.rooms[index] = item;
    this.emit(AppConstants.CHANGE_EVENT);
  }

  deleteRoom(item) {
    const index = this.rooms.findIndex(x => x._id === item._id);
    if (index !== -1) {
        this.rooms.splice(index, 1);
    }
    this.emit(AppConstants.CHANGE_EVENT);
  }
  // --------------------------------------------------
  // END ROOM MODULE
  // --------------------------------------------------
  // --------------------------------------------------
  // LEVEL MODULE
  // --------------------------------------------------
  getLevels() {
    return this.levels;
  }

  getLevelById(id) {
    const item = this.levels.find( x => x._id === id );
    return item;
  }

  createLevel(item) {
    this.levels.splice(0, 0, item);
    this.emit(AppConstants.CHANGE_EVENT);
  }

  updateLevel(item) {
    const index = this.levels.findIndex(x => x._id === item._id);
    this.levels[index] = item;
    this.emit(AppConstants.CHANGE_EVENT);
  }

  deleteLevel(item) {
    const index = this.levels.findIndex(x => x._id === item._id);
    if (index !== -1) {
        this.levels.splice(index, 1);
    }
    this.emit(AppConstants.CHANGE_EVENT);
  }
  // --------------------------------------------------
  // END LEVEL MODULE
  // --------------------------------------------------
  // --------------------------------------------------
  // DEPARTMENT MODULE
  // --------------------------------------------------
  getDepartments() {
    return this.departments;
  }

  getDepartmentById(id) {
    const item = this.departments.find( x => x._id === id );
    return item;
  }

  createDepartment(item) {
    this.departments.splice(0, 0, item);
    this.emit(AppConstants.CHANGE_EVENT);
  }

  updateDeparment(item) {
    const index = this.departments.findIndex(x => x._id === item._id);
    this.departments[index] = item;
    this.emit(AppConstants.CHANGE_EVENT);
  }

  deleteDeparment(item) {
    const index = this.departments.findIndex(x => x._id === item._id);
    if (index !== -1) {
        this.departments.splice(index, 1);
    }
    this.emit(AppConstants.CHANGE_EVENT);
  }
  // --------------------------------------------------
  // END DEPARTMENT MODULE
  // --------------------------------------------------
  handleActions(action) {
    this.error = false;
    switch(action.type) {
      // ROOM MODULE
      case AppConstants.ROOM_RECEIVE: {
        this.rooms = action.items;
        this.emit(AppConstants.CHANGE_EVENT);
        break;
      }
      case AppConstants.ROOM_CREATE: {
        this.createRoom(action.item);
        break;
      }
      case AppConstants.ROOM_UPDATE: {
        this.updateRoom(action.item);
        break;
      }
      case AppConstants.ROOM_DELETE: {
        this.deleteRoom(action.item);
        break;
      }
      // LEVEL MODULE
      case AppConstants.LEVEL_RECEIVE: {
        this.levels = action.items;
        this.emit(AppConstants.CHANGE_EVENT);
        break;
      }
      case AppConstants.LEVEL_CREATE: {
        this.createLevel(action.item);
        break;
      }
      case AppConstants.LEVEL_UPDATE: {
        this.updateLevel(action.item);
        break;
      }
      case AppConstants.LEVEL_DELETE: {
        this.deleteLevel(action.item);
        break;
      }
      // DEPARTMENT MODULE
      case AppConstants.DEPARTMENT_RECEIVE: {
        this.departments = action.items;
        this.emit(AppConstants.CHANGE_EVENT);
        break;
      }
      case AppConstants.DEPARTMENT_CREATE: {
        this.createDepartment(action.item);
        break;
      }
      case AppConstants.DEPARTMENT_UPDATE: {
        this.updateDeparment(action.item);
        break;
      }
      case AppConstants.DEPARTMENT_DELETE: {
        this.deleteDeparment(action.item);
        break;
      }
      case AppConstants.MASTER_DATA_ERROR: {
        this.error = true;
        break;
      }

      default:
        return;
    }
  }
}

const store = new MasterDataStore();
dispatcher.register(store.handleActions.bind(store));

export default store;
