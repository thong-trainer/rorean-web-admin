import dispatcher from "../AppDispatcher";
import  * as Api from "../utils/AppAPI";
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
const querystring = require('querystring');
const AppConstants = require("../constants/AppConstants");
const Messages = require("../constants/Messages");
const LIMIT = 50;

export function reloadItemsAsync() {
  const url = Api.getContacts(0, LIMIT);
  axios(url).then((data) => {
    // receive dispatcher
    dispatcher.dispatch({
      type: AppConstants.RECEIVE_CONTACT,
      items: data["data"]
    });
  });
}

export function create(item) {
  const url = Api.createContact();
  axios.post(url, querystring.stringify(item)).then((response) => {
    // success message
    NotificationManager.success(Messages.CREATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // create dispatcher
    dispatcher.dispatch({
        type: AppConstants.CONTACT_CREATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}

export function update(item) {
  // item checking
  if(item !== undefined && item != null) {
    item.isCheck = true;
    const url = Api.updateContact(item._id);
    console.log(url);
    setTimeout(function(){
      // success message
      NotificationManager.success(Messages.UPDATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
      // update dispatcher
      dispatcher.dispatch({
          type: AppConstants.CONTACT_UPDATE,
          item: item,
      });
    }, 500);
  } else {
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  }
}

export function remove(item) {
  // item checking
  if(item !== undefined && item != null) {
    item.isCheck = true;
    const url = Api.deleteContact(item._id);
    console.log(url);
    setTimeout(function(){
      // success message
      NotificationManager.success(Messages.DELETE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
      // remove dispatcher
      dispatcher.dispatch({
          type: AppConstants.CONTACT_DELETE,
          item: item,
      });
    }, 500);
  } else {
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  }
}
