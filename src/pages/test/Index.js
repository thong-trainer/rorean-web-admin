import "../../css/jquery.dataTables.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "../../components/layout/Loading";
// import { ContactTable } from "../../components/ContactTable";
import Contact from "../../components/Contact";
import * as ContactActions from "../../actions/ContactActions";
import ContactStore from "../../stores/ContactStore";

const $ = require("jquery");
$.DataTable = require("datatables.net");

const CHANGE_EVENT = 'change';

// export class EditButton extends React.Component {
//
//   viewItem() {
//     console.log("The item to view is : ", this.props.item);
//      //this.context.router.history.push('/contact/store');
//      return <Redirect to='/target' />
//   }
//   render() {
//
//     return (
//       <div className="row">
//         <div className="col-sm-6">
//           <button onClick={this.viewItem.bind(this)} className='btn btn-block btn-info btn-sm'>View</button>
//         </div>
//         <div className="col-sm-6">
//           <button onClick={this.viewItem.bind(this)} className='btn btn-block btn-primary btn-sm'>Edit</button>
//         </div>
//       </div>
//     );
//   }
// }

export default class Index extends React.Component {
  constructor() {
    super();
    this.getItems = this.getItems.bind(this);
    this.state = {
      items: ContactStore.getAll(),
    };
  }

  componentWillMount() {
    ContactActions.reloadItemsAsync();
    ContactStore.on(CHANGE_EVENT, this.getItems);
    this.$el = $(this.el);
    this.$el.DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    });
  }

  componentWillUnmount() {
    ContactStore.removeListener(CHANGE_EVENT, this.getItems);
  }

  getItems() {
    this.setState({
      items: ContactStore.getAll(),
    });
  }

  render() {
    const { items } = this.state;
    
    // return nothing when no record
    if(!this.state.items) {
      return (
        <Loading />
      );
    }
    const ContactComponents = items.map((item) => {
        return <Contact key={item._id} {...item}/>;
    });

    return (
      <div className="content-wrapper">
          <section className="content-header">
            <Link to="/contact/store" className="btn btn-primary pull-right">Add New</Link>
            <ol className="breadcrumb">
              <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
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
                  {/* <ContactTable data={this.state.items}>
                  </ContactTable> */}
                  <table id="example2" className="table table-bordered table-hover" >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th with="50px"></th>
                        <th with="50px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {ContactComponents}
                    </tbody>
                  </table>
                </div>
              </div>

              </div>
            </div>
          </section>
        </div>
    );
  }
}
