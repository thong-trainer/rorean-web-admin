import React from "react";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import  * as Api from "../../utils/AppAPI";
import  HttpStatus from "../../constants/HttpStatus";
import  Messages from "../../constants/Messages";
import axios from 'axios';

const AppConstants = require("../../constants/AppConstants");
const querystring = require('querystring');

class Login extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    var rememberLogin = props.cookies.get(AppConstants.REMEMBER_LOGIN__KEY);

    this.state = {
        loading: false,
        invalid: false,
        errorMessage: "",
        remember: (rememberLogin !== undefined) ? rememberLogin.remember : false,
        telephone: (rememberLogin !== undefined) ? rememberLogin.telephone : "",
        password: (rememberLogin !== undefined) ? rememberLogin.password : "",
    };
  }

  change = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  checkBoxChange = e => {
    this.setState({
      remember: !this.state.remember
    });
  };

  enableLoading = () => {
    this.setState({ loading: true });
  };

  alertError = (message) => {
    this.setState({ loading: false, invalid: true, errorMessage: message });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.enableLoading();

    const { telephone, password, remember } = this.state;

    const item = { telephone: telephone, password: password };
    // get login api
    var url = Api.authLogin();
    // check user authentication
    axios.put(url, querystring.stringify(item)).then((userResponse) => {
      if(userResponse.status === HttpStatus.OK) {
        // get permission api
        url = Api.getPermission(userResponse["data"]._id);
        // check user permission
        axios(url).then((permissionResponse) => {
          if (permissionResponse.status === HttpStatus.OK) {
            // collection data
            const user = userResponse["data"];
            const permission = permissionResponse["data"];
            const setting = {
              user: user,
              permission: permission
            };
            // add school id to localStorage
            if(setting !== undefined) {
              localStorage.setItem(AppConstants.SCHOOL_ID_KEY, setting.permission.schoolId);
            }
            // add items to cookies
            const { cookies } = this.props;
            cookies.set(AppConstants.REMEMBER_LOGIN__KEY,
              {
                remember: remember,
                telephone: telephone,
                password: (remember) ? password : "",
              }
            );
            cookies.set(AppConstants.SETTING_KEY, setting);
          }
          else if (permissionResponse.status === HttpStatus.ACCEPTED) {
            // return invalid messages
            this.alertError(permissionResponse["data"].message)
          } else {
            // return error message
            this.alertError(Messages.INVALID_INFO)
          }
        });

      } else if (userResponse.status === HttpStatus.ACCEPTED) {
        // return invalid messages
        this.alertError(userResponse["data"].message)
      } else {
        // return error message
        this.alertError(Messages.INVALID_INFO)
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const marginStyles = {
        marginTop: "0px",
    };

    const { loading, telephone, password, invalid, errorMessage, remember } = this.state;

    const classForm = (invalid ? "form-group has-feedback has-error" : "form-group has-feedback")

    return (<div className="login-box">
      <div className="login-logo">
        <a href="/login">
          <b>Rorean</b>School</a>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Sign in</p>
        <form onSubmit={this.handleSubmit}>
          <div className={classForm}>
            <input id="telephone" value={telephone || ''} onChange={e => this.change(e)} type="text" className="form-control" placeholder="Mobile number" required/>
            <span className={loading ? "fa fa-refresh fa-spin form-control-feedback" : "glyphicon glyphicon-envelope form-control-feedback"}></span>
          </div>
          <div className={classForm}>
            <input id="password" value={password || ''} onChange={e => this.change(e)} type="password"  className="form-control" placeholder="Password" required/>
            <span className={loading ? "fa fa-refresh fa-spin form-control-feedback" : "glyphicon glyphicon-lock form-control-feedback"}></span>
            {invalid ? <span className="help-block">{errorMessage}</span> : ''}
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox" style={marginStyles}>
             <label>
               <input checked={remember} onChange={e => this.checkBoxChange(e)} type="checkbox"/>
               Remeber password
             </label>
           </div>
              <a href="/login">I forgot my password</a>
            </div>
            <div className="col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>);
  }
}

export default withCookies(Login);
