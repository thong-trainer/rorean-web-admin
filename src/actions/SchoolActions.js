import dispatcher from "../AppDispatcher";
import  * as Api from "../utils/AppAPI";
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
const querystring = require('querystring');
const AppConstants = require("../constants/AppConstants");
const Messages = require("../constants/Messages");

export function getItemAsync() {
  const url = Api.getSchool();
  axios(url).then((data) => {
    // receive dispatcher
    dispatcher.dispatch({
      type: AppConstants.SCHOOL_RECEIVE,
      item: data["data"]
    });
  });
}

export function update(item) {
  // item checking
  if(item !== undefined && item != null) {
    item.isCheck = true;
    const url = Api.updateContact(item._id);
    console.log(url);

    axios.put(url, querystring.stringify(item)).then((response) => {
      // success message
      NotificationManager.success(Messages.UPDATE_SUCCESS_MESSAGE, Messages.SUCCESS_TITLE);
      // update dispatcher
      dispatcher.dispatch({
          type: AppConstants.CONTACT_UPDATE,
          item: item,
      });
    }).catch(function (error) {
      console.log(error);
      NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
    });
  } else {
    NotificationManager.error(Messages.ERROR_MESSAGE, Messages.ERROR_TITLE);
  }
}
