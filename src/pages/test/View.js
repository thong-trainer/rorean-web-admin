import React from "react";
import { Link } from 'react-router-dom';
import ContactStore from "../../stores/ContactStore";
import Loading from "../../components/layout/Loading";


export default class View extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind(this);
    this.state = {
        item: {}
    };
  }

  componentWillMount() {
    this.getItem();
  }

  getItem() {
    var item = ContactStore.getById(this.props.match.params.id);
    this.setState({ item: item });
  }

  render() {

    const { item } = this.state;

    // return nothing when no record
    if (!item) {
      return <Loading/>;
    }

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
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Contact Form</h3>
              </div>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="box-body">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input id="name" value={item.name || ''}
                       type="text" className="form-control" placeholder="Enter your name..." readOnly/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" value={item.email || ''}
                      type="email" className="form-control" placeholder="Enter your email..." readOnly/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">What is your mind?</label>
                    <textarea id="description" value={item.description || ''}
                      className="form-control" rows="3" placeholder="Write something here ..." readOnly></textarea>
                  </div>
                </div>
                <div className="box-footer">
                  <Link to="/contact" className="btn btn-default">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="row app-top-margin" />
    </div>);
  }
}
