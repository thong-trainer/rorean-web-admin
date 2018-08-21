import dispatcher from "../AppDispatcher";
import  * as Api from "../utils/AppAPI";
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
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
