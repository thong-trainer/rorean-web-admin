import React from "react";
import {Link} from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import * as ContactActions from "../../actions/ContactActions";
import ContactStore from "../../stores/ContactStore";
const CHANGE_EVENT = 'change';

export default class Update extends React.Component {
  constructor() {
    super();
    this.onStoreChanged = this.onStoreChanged.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
        name: "",
        email: "",
        description: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  componentWillMount() {
    ContactStore.on(CHANGE_EVENT, this.onStoreChanged);
  }

  onStoreChanged() {
    this.setState({
        name: "",
        email: "",
        description: ""
    });
  }

  submit(event) {
    event.preventDefault();
    ContactActions.create(this.state);
  }

  render() {
    return (<div className="content-wrapper">
      <section className="content-header">
        <ol className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>Home</Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa fa-dashboard"></i>Contacts</Link>
          </li>
          <li className="active">Add New</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-6">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Contact Form</h3>
              </div>
              <form className="form" onSubmit={this.submit}>
                <div className="box-body">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input id="name" value={this.state.name} onChange={e => this.change(e)}
                       type="text" className="form-control" placeholder="Enter your name..." required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" value={this.state.email} onChange={e => this.change(e)}
                      type="email" className="form-control" placeholder="Enter your email..." required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">What is your mind?</label>
                    <textarea id="description" value={this.state.description} onChange={e => this.change(e)}
                      className="form-control" rows="3" placeholder="Write something here ..." required></textarea>
                  </div>
                </div>
                <div className="box-footer">
                  <Link to="/contact" className="btn btn-default">Cancel</Link>
                  <button type="submit" className="btn btn-primary pull-right">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <NotificationContainer/>
    </div>);
  }
}
