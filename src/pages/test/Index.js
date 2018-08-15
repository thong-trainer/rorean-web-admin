import React from "react";
import {Link} from "react-router-dom";

import Loading from "../../components/layout/Loading";
import {NotificationContainer} from 'react-notifications';
import * as ContactActions from "../../actions/ContactActions";
import ContactStore from "../../stores/ContactStore";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const CHANGE_EVENT = 'change';

export default class Index extends React.Component {
  constructor() {
    super();
    this.getItems = this.getItems.bind(this);
    this.state = {
      id: "",
      items: ContactStore.getAll()
    };
  }

  componentWillMount() {
    ContactActions.reloadItemsAsync();
    ContactStore.on(CHANGE_EVENT, this.getItems);
  }

  componentWillUnmount() {
    ContactStore.removeListener(CHANGE_EVENT, this.getItems);
  }

  getItems() {
    this.setState({items: ContactStore.getAll()});
  }

  handleDelete() {
    const item = ContactStore.getById(this.state.id)
    ContactActions.remove(item);
    this.setState({ id: "" });
  }

  showConfirmDelete(id) {
    this.setState({ id: id });

  }

  render() {
    const { items } = this.state;

    // return nothing when no record
    if (!items) {
      return (<Loading/>);
    }

    return (<div className="content-wrapper">
      <section className="content-header">
        <Link to="/contact/store" className="btn btn-primary pull-right">Add New</Link>
        <ol className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>Home</Link>
          </li>
          <li className="active">Contacts</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box box-primary">
              <div className="box-header">
                <h3 className="box-title">List of contacts</h3>
              </div>
              <div className="box-body">
                <div>
                  <ReactTable data={items} columns={[
                      {
                        Header: "No",
                        id: "row",
                        filterable: false,
                        sortable: false,
                        maxWidth: 50,
                        className: "row-center",
                        Cell: (row) => { return <div>{row.index+1}</div>;}
                      },
                      {
                        Header: 'Name',
                        accessor: 'name',
                      },
                      {
                        Header: 'Email',
                        accessor: 'email'
                      },
                      {
                        filterable: false,
                        sortable: false,
                        width: 70,
                        accessor: '_id',
                        Cell: props => <Link to={'/contact/view/'+props.value} className="btn btn-block btn-info btn-sm">View</Link>
                      },
                      {
                        filterable: false,
                        sortable: false,
                        width: 70,
                        accessor: '_id',
                        Cell: props => <Link to={'/contact/update/'+props.value} className="btn btn-block btn-primary btn-sm">Edit</Link>
                      },
                      {
                        filterable: false,
                        sortable: false,
                        width: 70,
                        accessor: '_id',
                        Cell: props => <button onClick={() => this.showConfirmDelete(props.value)} ref="myModal" className="btn btn-block btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">Delete</button>
                      }
                    ]} defaultPageSize={10} filterable={true} className="-striped -highlight"/>
                  <br/>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* delete model */}
        <div className="modal modal-danger fade" id="modal-danger">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Confirm</h4>
              </div>
              <div className="modal-body">
                <p>Are you sure, want to delete this record?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button onClick={this.handleDelete.bind(this)} type="button" className="btn btn-outline" data-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
        {/* end delete model */}
        <NotificationContainer/>
      </section>
    </div>);
  }
}
