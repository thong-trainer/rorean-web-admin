import React from "react";
import { Link } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import * as ContactActions from "../../actions/ContactActions";
import ContactStore from "../../stores/ContactStore";
import Loading from "../../components/layout/Loading";
const CHANGE_EVENT = 'change';

export default class Form extends React.Component {
  constructor() {
    super();

    this.onStoreChanged = this.onStoreChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getItem = this.getItem.bind(this);

    this.state = {
        loading: false,
        isEdit: false,
        item: {}
    };
  }

  componentWillMount() {
    if(this.props.match.params.id !== undefined) {
        this.getItem();
    }
    ContactStore.on(CHANGE_EVENT, this.onStoreChanged);
  }

  componentWillUnmount() {
    ContactStore.removeListener(CHANGE_EVENT, this.onStoreChanged);
  }

  onStoreChanged() {
    this.disableLoading();
    if(!this.state.isEdit) {
      this.setState({ item: {} });
    }
  }
  
  getItem() {
    var item = ContactStore.getById(this.props.match.params.id);
    this.setState({
        isEdit: true,
        item: item
    });
  }

  change = e => {
    var editItem = this.state.item;
    switch (e.target.id) {
      case "name":
        editItem.name = e.target.value;
        break;
      case "email":
        editItem.email = e.target.value;
        break;
      case "description":
        editItem.description = e.target.value;
        break;
      default:
    }

    this.setState({ item: editItem });
  };

  enableLoading = () => {
    this.setState({ loading: true });
  };

  disableLoading = () => {
    this.setState({ loading: false });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.enableLoading();

    if(this.state.isEdit) {
      ContactActions.update(this.state.item);
    } else {
      ContactActions.create(this.state.item);
    }
  }

  render() {

    const { loading, item } = this.state;

    // return nothing when no record
    if (!item) {
      return <Loading />;
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
                    <input id="name" value={item.name || ''} onChange={e => this.change(e)}
                       type="text" className="form-control" placeholder="Enter your name..." required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" value={item.email || ''} onChange={e => this.change(e)}
                      type="email" className="form-control" placeholder="Enter your email..." required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">What is your mind?</label>
                    <textarea id="description" value={item.description || ''} onChange={e => this.change(e)}
                      className="form-control" rows="3" placeholder="Write something here ..." required></textarea>
                  </div>
                </div>

                <div className="box-footer">
                  <Link to="/contact" className="btn btn-default">Cancel</Link>
                  <button type="submit" className="btn btn-primary pull-right">Save</button>
                </div>
              </form>
              {/* <!-- Loading (remove the following to stop the loading)--> */}
                { loading ? <div className="overlay" >
                  <i className="fa fa-refresh fa-spin"></i>
                </div> : null }
              {/* <!-- end loading --> */}
            </div>
          </div>
        </div>
      </section>
      <div className="row app-top-margin" />
      <NotificationContainer/>
    </div>);
  }
}
