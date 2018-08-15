import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>Copyright &copy; 2018-2020 <a href="https://adminlte.io">Rorean Innovator Group</a>.</strong> All rights
          reserved.
        </footer>
    );
  }
}
