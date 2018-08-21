import dispatcher from "../AppDispatcher";
import  * as Api from "../utils/AppAPI";
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
const AppConstants = require("../constants/AppConstants");
const Messages = require("../constants/Messages");

// -----------------------------------------------
// ROOM MODULE
// -----------------------------------------------
export function getRoomsAsync() {
  const url = Api.getRooms();
  axios(url).then((data) => {
    // receive dispatcher
    dispatcher.dispatch({
      type: AppConstants.ROOM_RECEIVE,
      items: data["data"]
    });
  });
}

export function createRoomAsync(item) {
  const url = Api.createRoom();
  setTimeout(function(){
  axios.post(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.ROOM_CREATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
  }, 1000);
}

export function updateRoomAsync(item) {
  const url = Api.updateRoom(item._id);
  axios.put(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.ROOM_UPDATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}

export function removeRoomAsync(item) {
  const url = Api.removeRoom(item._id);
  axios.delete(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.ROOM_DELETE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}
// -----------------------------------------------
// END ROOM MODULE
// -----------------------------------------------
// -----------------------------------------------
// LEVEL MODULE
// -----------------------------------------------
export function getLevelsAsync() {
  const url = Api.getLevels();
  axios(url).then((data) => {
    // receive dispatcher
    dispatcher.dispatch({
      type: AppConstants.LEVEL_RECEIVE,
      items: data["data"]
    });
  });
}

export function createLevelAsync(item) {
  const url = Api.createLevel();
  setTimeout(function(){
  axios.post(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.LEVEL_CREATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
  }, 1000);
}

export function updateLevelAsync(item) {
  const url = Api.updateLevel(item._id);
  axios.put(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.LEVEL_UPDATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}

export function removeLevelAsync(item) {
  const url = Api.removeLevel(item._id);
  axios.delete(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.LEVEL_DELETE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}
// -----------------------------------------------
// END LEVEL MODULE
// -----------------------------------------------
// -----------------------------------------------
// DEPARTMENT MODULE
// -----------------------------------------------
export function getDepartmentsAsync() {
  const url = Api.getDepartments();
  axios(url).then((data) => {
    // receive dispatcher
    dispatcher.dispatch({
      type: AppConstants.DEPARTMENT_RECEIVE,
      items: data["data"]
    });
  });
}

export function createDepartmentAsync(item) {
  const url = Api.createDepartment();
  setTimeout(function(){
  axios.post(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.DEPARTMENT_CREATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
  }, 1000);  
}

export function updateDepartmentAsync(item) {
  const url = Api.updateDeparment(item._id);
  axios.put(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.DEPARTMENT_UPDATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}

export function removeDepartmentAsync(item) {
  const url = Api.removeDepartment(item._id);
  axios.delete(url, item).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.DEPARTMENT_DELETE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
        type: AppConstants.MASTER_DATA_ERROR,
        message: error
    });
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}
