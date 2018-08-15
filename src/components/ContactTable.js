import "../css/jquery.dataTables.css";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {EditButton} from "../pages/test/Index";
const $ = require("jquery");
$.DataTable = require("datatables.net");

export class ContactTable extends Component {

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      scrollY: true,
      data: this.props.data,
      columnDefs: [
        {
          width: "100px",
          orderable: false,
          targets: 3,
          createdCell: (td, cellData, rowData, row, col) => {
            ReactDOM.render(
              <EditButton item={cellData}/>,
              td
            );
          }
        }
      ],
      columns: [
           { data: "name", title: "Name" },
           { data: "email", title: "Email" },
           { data: "isCheck", title: "Check" },
           { data: null },
      ]
    });
  }

  handleClick = e => {
    console.log("Clicked...");
  }

  render() {
    const tableStyles = {
      width: "100%",
    };

    return <div>
      <table className="display" style={tableStyles} ref={el => this.el = el}>

      </table>
    </div>
  }
}
