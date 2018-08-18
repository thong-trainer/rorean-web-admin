import React from "react";
import { NavLink } from 'react-router-dom';
import * as SchoolActions from "../../actions/SchoolActions";
import SchoolStore from "../../stores/SchoolStore";

const AppConstants = require("../../constants/AppConstants");
const imagePlaceholder = "http://www.cagbd.org/newdesign/assets/dist/img/user2-160x160.jpg";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
    this.state = {
      school: JSON.parse(localStorage.getItem(localStorage.getItem(AppConstants.SCHOOL_KEY)))
    }
  }

  componentWillMount() {
    SchoolActions.getItemAsync();
    SchoolStore.on(AppConstants.CHANGE_EVENT, this.getItem);
  }

  componentWillUnmount() {
    SchoolStore.removeListener(AppConstants.CHANGE_EVENT, this.getItem);
  }

  getItem() {
    var item = SchoolStore.getItem();
    this.setState({ school: item });
    localStorage.setItem(localStorage.getItem(AppConstants.SCHOOL_KEY), JSON.stringify(item));
  }

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  }

  render() {

    const { school } = this.state;

    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={(school !== null) ? school.image.profileUrl: imagePlaceholder} className="img-circle" alt="User Placeholder"/>
            </div>
            <div className="pull-left info">
              <p>{(school !== null) ? school.schoolName: "Loading..."}</p>
              <NavLink to="/"><i className="fa fa-circle text-success"></i> Online</NavLink>
            </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">IMPORTANT</li>
            <li className={this.getNavLinkClass("/")}>
              <NavLink to="/">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-university"></i>
                <span>Classrooms</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-cubes"></i>
                <span>Subjects</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-users"></i>
                <span>Students</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-green">new</small>
                </span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-user-circle"></i>
                <span>Teachers</span>
              </a>
            </li>

            <li className={this.getNavLinkClass("/contact")}>
              <NavLink to="/contact">
                <i className="fa fa-circle-o text-red"></i>
                <span>Contacts</span>
              </NavLink>
            </li>

            <li className="header">CONFIGURATION</li>
            <li >
              <NavLink to="/">
                <i className="fa fa-pie-chart"></i>
                <span>Report</span>
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/masterdata")}>
              <NavLink to="/masterdata">
                <i className="fa fa-folder-open"></i>
                <span>Master Data</span>
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/setting")}>
              <NavLink to="/setting">
                <i className="fa fa-cogs"></i>
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
