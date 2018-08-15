'use strict'
import dispatcher from "../AppDispatcher";
import  * as Api from "../utils/AppAPI";
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const querystring = require('querystring');
const AppConstants = require("../constants/AppConstants");
const Messages = require("../constants/Messages");
const LIMIT = 50;

export function reloadItemsAsync() {
  dispatcher.dispatch({type: AppConstants.CONTACT_FETCH});
  const url = Api.getContacts(0, LIMIT);
  setTimeout(() => {
    axios(url).then((data) => {
      // dispatcher
      dispatcher.dispatch({
        type: AppConstants.RECEIVE_CONTACT,
        items: data["data"]
      });
    });
  }, 500);
}

export function create(item) {
  const url = Api.createContact();
  axios.post(url, querystring.stringify(item)).then((response) => {
    // alert message
    NotificationManager.success(Messages.SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
    // dispatcher
    dispatcher.dispatch({
        type: AppConstants.CONTACT_CREATE,
        item: response["data"],
    });
  }).catch(function (error) {
    console.log(error);
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  });
}

export function remove(item) {
  item.isCheck = true;
  const url = Api.deleteContact(item._id);
  console.log(url);
  // alert message
  NotificationManager.success(Messages.SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
  // dispatcher
  dispatcher.dispatch({
      type: AppConstants.CONTACT_DELETE,
      item: item,
  });
}
