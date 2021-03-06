import React from "react";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

const AppConstants = require("../../constants/AppConstants");
var dateFormat = require('dateformat');

class Header extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    const setting = props.cookies.get(AppConstants.SETTING_KEY);
    this.state = {
      user: setting.user,
      permission: setting.permission,
    };
  }

  handleSignOut() {
    const { cookies } = this.props;
    cookies.remove(AppConstants.SETTING_KEY);
    localStorage.removeItem(AppConstants.SCHOOL_ID_KEY);
    localStorage.removeItem(AppConstants.SCHOOL_KEY);
  }

  render() {

    const { user, permission } = this.state;

    return (
      <header className="main-header">
        {/* <!-- Logo --> */}
        <a href="/" className="logo">
          {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
          <span className="logo-mini"><b>R</b>ean</span>
          {/* <!-- logo for regular state and mobile devices --> */}
          <span className="logo-lg"><b>Rorean</b>School</span>
        </a>
        {/* <!-- Header Navbar: style can be found in header.less --> */}
        <nav className="navbar navbar-static-top">
          {/* <!-- Sidebar toggle button--> */}
          <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* <!-- Messages: style can be found in dropdown.less--> */}
              <li className="dropdown messages-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-warning">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    {/* <!-- inner menu: contains the actual data --> */}
                    <ul className="menu">
                      <li>
                        <a href="/">
                          <div className="pull-left">
                            <img src="http://www.cagbd.org/newdesign/assets/dist/img/user2-160x160.jpg" className="img-circle" alt="User Placeholder"/>
                          </div>
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"></i> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className="pull-left">
                            <img src="http://www.cagbd.org/newdesign/assets/dist/img/user3-128x128.jpg" className="img-circle" alt="User Placeholder"/>
                          </div>
                          <h4>
                            AdminLTE Design Team
                            <small><i className="fa fa-clock-o"></i> 2 hours</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className="pull-left">
                            <img src="http://www.cagbd.org/newdesign/assets/dist/img/user4-128x128.jpg" className="img-circle" alt="User Placeholder"/>
                          </div>
                          <h4>
                            Developers
                            <small><i className="fa fa-clock-o"></i> Today</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className="pull-left">
                            <img src="http://www.cagbd.org/newdesign/assets/dist/img/user2-160x160.jpg" className="img-circle" alt="User Placeholder"/>
                          </div>
                          <h4>
                            Sales Department
                            <small><i className="fa fa-clock-o"></i> Yesterday</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className="pull-left">
                            <img src="http://www.cagbd.org/newdesign/assets/dist/img/user2-160x160.jpg" className="img-circle" alt="User Placeholder"/>
                          </div>
                          <h4>
                            Reviewers
                            <small><i className="fa fa-clock-o"></i> 2 days</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="/">See All Messages</a></li>
                </ul>
              </li>
              {/* <!-- Notifications: style can be found in dropdown.less --> */}
              <li className="dropdown notifications-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-danger">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    {/* <!-- inner menu: contains the actual data --> */}
                    <ul className="menu">
                      <li>
                        <a href="/">
                          <i className="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                          page and may cause design problems
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-users text-red"></i> 5 new members joined
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-user text-red"></i> You changed your username
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="/">View all</a></li>
                </ul>
              </li>

              {/* <!-- User Account: style can be found in dropdown.less --> */}
              <li className="dropdown user user-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="http://www.cagbd.org/newdesign/assets/dist/img/user2-160x160.jpg" className="user-image" alt="User Placeholder"/>
                  <span className="hidden-xs">{user.username}</span>
                </a>
                <ul className="dropdown-menu">
                  {/* <!-- User Placeholder --> */}
                  <li className="user-header">
                    <img src="http://www.cagbd.org/newdesign/assets/dist/img/user2-160x160.jpg" className="img-circle" alt="User Placeholder"/>

                    <p>
                      {permission.role}
                      <small>{'Member since ' + dateFormat(permission.createdAt, "mmmm, yyyy")}</small>
                    </p>
                  </li>
                  {/* <!-- Menu Body --> */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="/">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="/">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="/">Friends</a>
                      </div>
                    </div>
                    {/* <!-- /.row --> */}
                  </li>
                  {/* <!-- Menu Footer--> */}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="/" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <button onClick={this.handleSignOut.bind(this)} className="btn btn-default btn-flat">Sign out</button>
                    </div>
                  </li>
                </ul>
              </li>


            </ul>
          </div>
        </nav>
      </header>
    );
  }
}


export default withCookies(Header);
