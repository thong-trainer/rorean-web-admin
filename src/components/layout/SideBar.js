import React from "react";
import { NavLink } from 'react-router-dom';



export default class SideBar extends React.Component {
  getNavLinkClass = (path) => {
    console.log("getNavLinkClass");
    console.log(this.props);
    return this.props.location.pathname === path ? "active" : "";
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <form action="/" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                    </button>
                  </span>
            </div>
          </form>

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
                <span className="pull-right-container">
                  <small className="label pull-right bg-green">new</small>
                </span>
              </a>
            </li>
            <li className={this.getNavLinkClass("/contact")}>
              <NavLink to="/contact">
                <i className="fa fa-circle-o text-red"></i>
                <span>Contacts</span>
              </NavLink>
            </li>
            <li className="header">CONFIGURATION</li>
            <li className="treeview">
              <a href="/">
                <i className="fa fa-folder-open"></i> <span>Master Data</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i>Rooms</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Levels</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Departments</a></li>
              </ul>
            </li>

            <li className="treeview">
              <a href="/">
                <i className="fa fa-pie-chart"></i>
                <span>Reports</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> Report 1</a></li>
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Report 2</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Report 3</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="/">
                <i className="fa fa-cogs"></i>
                <span>Settings</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Backup</a></li>
                <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Restore</a></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
