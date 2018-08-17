import React from "react";
import {Link} from 'react-router-dom';
// Import React Tab
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Room 1",
          description: "This is our room."
        }, {
          name: "Room 2",
          description: "This is our room."
        }, {
          name: "Room 3",
          description: "This is our room."
        }, {
          name: "Room 4",
          description: "This is our room."
        }, {
          name: "Room 5",
          description: "This is our room."
        }, {
          name: "Room 6",
          description: "This is our room."
        }
      ]
    };
  }

  render() {
    return (<div className="content-wrapper">
      <section className="content-header">
        <h1> Master Data </h1>
        <ol className="breadcrumb">
          <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
          <li className="active">Master Data</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">

            <Tabs>
              <TabList>
                <Tab>Rooms</Tab>
                <Tab>Departments</Tab>
                <Tab>Levels</Tab>
              </TabList>

              <TabPanel>
                <div className="box box-primary">
                  <div className="box-header">
                     <h3 className="box-title">Add a room</h3>
                     <p className="text-muted">Enter a room that has in your school below to allow the classroom can be relate to it.</p>
                     <form className="form custom-horizontal">
                         <div className="row">
                           <div className="col-lg-4">
                             <div className="form-group">
                               <label htmlFor="name">Name</label>
                               <input id="name"
                                  type="text" className="form-control" placeholder="Enter name..." />
                             </div>
                           </div>
                           <div className="col-lg-6">
                             <div className="form-group">
                               <label htmlFor="name">Description</label>
                               <input id="name"
                                  type="text" className="form-control" placeholder="Enter description..." />
                             </div>
                           </div>
                           <div className="col-lg-2 add-button" >
                               <Link to="/" className="btn btn-primary">Add Room</Link>
                           </div>
                         </div>
                     </form>
                     <h3 className="box-title">List of rooms</h3>
                  </div>
                  <div className="box-body">

                    <ReactTable data={this.state.items} columns={[
                        {
                          Header: "No",
                          id: "row",
                          filterable: false,
                          maxWidth: 50,
                          className: "row-center",
                          Cell: (row) => {
                            return <div>{row.index + 1}</div>;
                          }
                        }, {
                          Header: 'Name',
                          accessor: 'name'
                        }, {
                          Header: 'Description',
                          accessor: 'description'
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
                      ]} defaultPageSize={10} className="-striped -highlight"/>
                    <br/>

                  </div>

                </div>
              </TabPanel>
              <TabPanel>
              </TabPanel>
              <TabPanel>
                <p>
                  <b>Princess Peach</b>
                  (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>) is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto, Peach is the princess of the fictional Mushroom Kingdom, which is constantly under attack by Bowser. She often plays the damsel in distress role within the series and is the lead female. She is often portrayed as Mario's love interest and has appeared in Super Princess Peach, where she is the main playable character.
                </p>

              </TabPanel>

            </Tabs>

          </div>
        </div>
      </section>
    </div>);
  }
}
