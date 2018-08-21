import React from "react";
import { Link } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';
import * as ContactActions from "../../actions/ContactActions";
import ContactStore from "../../stores/ContactStore";
import AppConstants from "../../constants/AppConstants";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Index extends React.Component {
  constructor() {
    super();
    this.getItems = this.getItems.bind(this);
    const data = ContactStore.getAll();

    this.state = {
      id: "",
      loading: (data.length === 0) ? true : false,
      items: ContactStore.getAll()
    };
  }

  componentWillMount() {
    ContactActions.reloadItemsAsync();
    ContactStore.on(AppConstants.CHANGE_EVENT, this.getItems);
  }

  componentWillUnmount() {
    ContactStore.removeListener(AppConstants.CHANGE_EVENT, this.getItems);
  }

  getItems() {
    this.setState({ loading: false, items: ContactStore.getAll() });
  }

  handleDelete() {
    const item = ContactStore.getById(this.state.id)
    ContactActions.remove(item);
    this.setState({ id: "" });
  }

  showModalDelete(id) {
    this.setState({ id: id });
  }

  render() {
    const { loading, items } = this.state;

    return (<div className="content-wrapper">
      <section className="content-header">
        <h1> Contacts </h1>
        <ol className="breadcrumb">
          <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
          <li className="active">Contacts</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header AlertDiv">
                <h3 className="box-title">List of contacts</h3>
                <Link to="/contact/store" className="btn btn-primary pull-right">Create</Link>
              </div>
              <div className="box-body">
                <div>
                  <ReactTable data={items} columns={[
                      {
                        Header: "No",
                        id: "row",
                        filterable: false,
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
                        Cell: props => <Link to={'/contact/update/'+props.value} className="btn btn-block btn-primary btn-sm">Edit</Link>
                      },
                      {
                        filterable: false,
                        sortable: false,
                        width: 70,
                        accessor: '_id',
                        Cell: props => <button onClick={() => this.showModalDelete(props.value)} ref="myModal" className="btn btn-block btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">Delete</button>
                      }
                    ]}
                    getTdProps={(state, rowInfo, column, instance) => {
                      return {
                        onClick: (e, handleOriginal) => {
                          if(column.Header !== undefined) {
                            this.props.history.push('/contact/view/'+rowInfo.original._id);
                          }
                        }
                      };
                    }}
                    defaultPageSize={10} filterable={true} loading={loading} className="-striped -highlight"/>
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
