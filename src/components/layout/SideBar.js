import React from "react";
import { NavLink } from 'react-router-dom';



export default class SideBar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t31.0-8/16903144_1332366483491517_1139662969174240473_o.jpg?_nc_cat=1&oh=e69d8b0e9bf6bc755d076559b8cee3af&oe=5BF55FA0" className="img-circle" alt="User Placeholder"/>
            </div>
            <div className="pull-left info">
              <p>Learning for Success</p>
              <NavLink to="/"><i className="fa fa-circle text-success"></i> Online</NavLink>
            </div>
          </div>
{/* 
          <form action="/" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                    </button>
                  </span>
            </div>
          </form> */}

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
            {/* <li className="treeview">
              <NavLink to={this.props.location.pathname}>
                <i className="fa fa-cogs"></i>
                <span>Settings</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </NavLink>
              <ul className="treeview-menu">
                <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Backup</a></li>
                <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Restore</a></li>
              </ul>
            </li> */}
          </ul>
        </section>
      </aside>
    );
  }
}
