import React from "react";

import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";


export default class Layout extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Header {...this.props}/>
        <SideBar location={this.props.location}/>
        {this.props.children}
        <div className="control-sidebar-bg"></div>
        <Footer />
      </div>
    );
  }
}
