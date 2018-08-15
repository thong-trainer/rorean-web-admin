import React from "react";
import { Link } from "react-router-dom";
export default class Contact extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { email, name } = this.props;
    const columnStyles = {
      width: "50px",
    };
    
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td style={columnStyles}><Link to="/contact/store" className="btn btn-block btn-info btn-sm" >View</Link></td>
        <td style={columnStyles}><Link to="/contact/store" className="btn btn-block btn-primary btn-sm" >Edit</Link></td>
      </tr>
    );
  }
}
