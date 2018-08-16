import React from "react";
import { Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import  * as Api from "../../utils/AppAPI";
import  HttpStatus from "../../constants/HttpStatus";
import axios from 'axios';
const querystring = require('querystring');

class Login extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        invalid: false,
        errorMessage: "",
        loggedIn: (props.cookies.get("permission") == "null") ? false : true,
        telephone: "",
        password: ""
    };
  }

  change = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
  };

  handleSubmit(event) {
    event.preventDefault();
    var item = { telephone: this.state.telephone, password: this.state.password };

    // check user authentication
    axios.put(Api.authLogin(), querystring.stringify(item)).then((userResponse) => {
      if(userResponse.status === HttpStatus.OK) {
        // get api url
        const url = Api.getPermission(userResponse["data"]._id);
        // check user permission
        axios(url).then((permissionResponse) => {
          if (permissionResponse.status === HttpStatus.OK) {

            // add items to cookie
            const { cookies } = this.props;
            cookies.set("user", userResponse["data"]);
            cookies.set("permission", permissionResponse["data"]);
            this.props.history.push("/");
          }
          else if (permissionResponse.status === HttpStatus.ACCEPTED) {
            // return invalid messages
            this.setState({ invalid: true, errorMessage: permissionResponse["data"].message });
          } else {
            // return error message
            this.setState({ invalid: true, errorMessage: "Invalid information." });
          }
        });
      } else if (userResponse.status === HttpStatus.ACCEPTED) {
        // return invalid messages
        this.setState({ invalid: true, errorMessage: userResponse["data"].message });
      } else {
        // return error message
        this.setState({ invalid: true, errorMessage: "Invalid information." });
      }

    }).catch(function (error) {
      console.log(error);
      this.setState({ invalid: true, errorMessage: "The application got some errros." });
    });
  }

  render() {

    const { telephone, password, loggedIn, invalid, errorMessage } = this.state;

    if(loggedIn) {
      return <Redirect to="/" />
    }

    const classForm = (invalid ? "form-group has-feedback has-error" : "form-group has-feedback")

    console.log("rendering...");

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
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className={classForm}>
            <input id="password" value={password || ''} onChange={e => this.change(e)} type="password"  className="form-control" placeholder="Password" required/>
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
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
