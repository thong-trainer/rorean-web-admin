import React from "react";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import  * as Api from "../../utils/AppAPI";
import  HttpStatus from "../../constants/HttpStatus";
import  Messages from "../../constants/Messages";
import axios from 'axios';
const querystring = require('querystring');
const REMEMBER_PASSWORD = "rememberpassword";

class Login extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        loading: false,
        invalid: false,
        errorMessage: "",
        telephone: "855-069665533",
        password: props.cookies.get(REMEMBER_PASSWORD)
    };
  }

  change = e => {
    this.setState({ [e.target.id]: e.target.value });
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

    var item = { telephone: this.state.telephone, password: this.state.password };

    // check user authentication
    axios.put(Api.authLogin(), querystring.stringify(item)).then((userResponse) => {
      if(userResponse.status === HttpStatus.OK) {
        // get api url
        const url = Api.getPermission(userResponse["data"]._id);
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
            // add items to cookie
            const { cookies } = this.props;
            cookies.set(REMEMBER_PASSWORD, this.state.password);
            cookies.set("setting", setting);
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
      this.setState({ loading: false, invalid: true, errorMessage: Messages.SERVER_ERROR });
    });
  }

  render() {

    const { loading, telephone, password, invalid, errorMessage } = this.state;

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
