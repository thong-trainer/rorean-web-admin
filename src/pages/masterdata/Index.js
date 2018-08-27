import React from "react";
import {Link} from 'react-router-dom';
import {withCookies, Cookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import {NotificationContainer} from 'react-notifications';
import * as MasterDataActions from "../../actions/MasterDataActions";
import MasterDataStore from "../../stores/MasterDataStore";
import AppConstants from "../../constants/AppConstants";
// Import React Tab
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const ROOM = "room";
const LEVEL = "level";
const DEPARTMENT = "department";
const ADD_ROOM = "Add Room";
const ADD_LEVEL = "Add Level";
const ADD_DEPARTMENT = "Add Department";
const UPDATE = "Update";
class Index extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    this.onStoreChanged = this.onStoreChanged.bind(this);
    this.handleRoom = this.handleRoom.bind(this);
    this.handleCancelEditRoom = this.handleCancelEditRoom.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.handleCancelEditLevel = this.handleCancelEditLevel.bind(this);
    this.handleDepartment = this.handleDepartment.bind(this);
    this.handleCancelEditDepartment = this.handleCancelEditDepartment.bind(this);
    const setting = props.cookies.get(AppConstants.SETTING_KEY);
    const rooms = MasterDataStore.getRooms()

    this.state = {
      loading: (rooms.length === 0)
        ? true
        : false,
      setting: setting,
      modal: {
        id: "",
        status: ""
      },
      rooms: rooms,
      room: {
        isEdit: false,
        saving: false,
        btnText: ADD_ROOM,
        name: "",
        description: ""
      },
      levels: MasterDataStore.getLevels(),
      level: {
        isEdit: false,
        saving: false,
        btnText: ADD_LEVEL,
        name: "",
        description: ""
      },
      departments: MasterDataStore.getDepartments(),
      department: {
        isEdit: false,
        saving: false,
        btnText: ADD_DEPARTMENT,
        name: "",
        description: ""
      }
    };
  }

  componentWillMount() {
    MasterDataActions.getRoomsAsync();
    MasterDataActions.getLevelsAsync();
    MasterDataActions.getDepartmentsAsync();
    MasterDataStore.on(AppConstants.CHANGE_EVENT, this.onStoreChanged);
  }

  componentWillUnmount() {
    MasterDataStore.removeListener(AppConstants.CHANGE_EVENT, this.onStoreChanged);
  }

  onStoreChanged() {
    const rooms = MasterDataStore.getRooms();

    const levels = MasterDataStore.getLevels();
    const departments = MasterDataStore.getDepartments();
    if (MasterDataStore.isSuccessed()) {
      this.setState({
        loading: false,
        modal: {
          id: "",
          status: ""
        },
        rooms: rooms,
        room: {
          isEdit: false,
          saving: false,
          btnText: ADD_ROOM,
          name: "",
          description: ""
        },
        levels: levels,
        level: {
          isEdit: false,
          saving: false,
          btnText: ADD_LEVEL,
          name: "",
          description: ""
        },
        departments: departments,
        department: {
          isEdit: false,
          saving: false,
          btnText: ADD_DEPARTMENT,
          name: "",
          description: ""
        }
      });
    }
  }

  handleDelete() {
    const {id, status} = this.state.modal;
    switch (status) {
      case ROOM:
        const room = MasterDataStore.getRoomById(id);
        MasterDataActions.removeRoomAsync(room);
        break;
      case LEVEL:
        const level = MasterDataStore.getLevelById(id);
        MasterDataActions.removeLevelAsync(level);
        break;
      case DEPARTMENT:
        const department = MasterDataStore.getDepartmentById(id);
        MasterDataActions.removeDepartmentAsync(department);
        break;
      default:
    }
  }
  // --------------------------------------------------
  // ROOM MODULE
  // --------------------------------------------------
  roomChange = e => {
    const item = this.state.room;
    item[e.target.id] = e.target.value
    this.setState({room: item});
  };

  handleRoom(event) {
    event.preventDefault();
    const item = this.state.room;
    if (item.saving) {
      return;
    }

    item.saving = true;
    this.setState({ room: item });

    if (item.isEdit) {
      MasterDataActions.updateRoomAsync(item);
    } else {
      item["createdBy"] = this.state.setting.permission.userId;
      item["schoolId"] = this.state.setting.permission.schoolId;
      MasterDataActions.createRoomAsync(item);
    }
  }

  showEditRoom(id) {
    const item = MasterDataStore.getRoomById(id);
    item["isEdit"] = true;
    item["btnText"] = UPDATE;
    this.setState({
      room: {
        ...item
      }
    });
  }

  handleCancelEditRoom() {
    this.setState({
      room: {
        isEdit: false,
        btnText: ADD_ROOM,
        name: "",
        description: ""
      }
    });
  }

  showConfirmDeleteRoom(id) {
    this.setState({
      modal: {
        id: id,
        status: ROOM
      }
    });
  }
  // --------------------------------------------------
  // END ROOM MODULE
  // --------------------------------------------------
  // --------------------------------------------------
  // LEVEL MODULE
  // --------------------------------------------------
  levelChange = e => {
    const item = this.state.level;
    item[e.target.id] = e.target.value
    this.setState({level: item});
  };

  handleLevel(event) {
    event.preventDefault();
    const item = this.state.level;
    if (item.saving) {
      return;
    }

    item.saving = true;
    this.setState({ level: item });

    if (item.isEdit) {
      MasterDataActions.updateLevelAsync(item);
    } else {
      item["createdBy"] = this.state.setting.permission.userId;
      item["schoolId"] = this.state.setting.permission.schoolId;
      MasterDataActions.createLevelAsync(item);
    }
  }

  showEditLevel(id) {
    const item = MasterDataStore.getLevelById(id);
    item["isEdit"] = true;
    item["btnText"] = UPDATE;
    this.setState({
      level: {
        ...item
      }
    });
  }

  handleCancelEditLevel() {
    this.setState({
      level: {
        isEdit: false,
        btnText: ADD_LEVEL,
        name: "",
        description: ""
      }
    });
  }

  showConfirmDeleteLevel(id) {
    this.setState({
      modal: {
        id: id,
        status: LEVEL
      }
    });
  }
  // --------------------------------------------------
  // END LEVEL MODULE
  // --------------------------------------------------
  // --------------------------------------------------
  // DEPARTMENT MODULE
  // --------------------------------------------------
  departmentChange = e => {
    const item = this.state.department;
    item[e.target.id] = e.target.value
    this.setState({department: item});
  };

  handleDepartment(event) {
    event.preventDefault();
    const item = this.state.department;
    if (item.saving) {
      return;
    }

    item.saving = true;
    this.setState({ level: item });

    if (item.isEdit) {
      MasterDataActions.updateDepartmentAsync(item);
    } else {
      item["createdBy"] = this.state.setting.permission.userId;
      item["schoolId"] = this.state.setting.permission.schoolId;
      MasterDataActions.createDepartmentAsync(item);
    }
  }

  showEditDepartment(id) {
    const item = MasterDataStore.getDepartmentById(id);
    item["isEdit"] = true;
    item["btnText"] = UPDATE;
    this.setState({
      department: {
        ...item
      }
    });
  }

  handleCancelEditDepartment() {
    this.setState({
      department: {
        isEdit: false,
        btnText: ADD_DEPARTMENT,
        name: "",
        description: ""
      }
    });
  }

  showConfirmDeleteDepartment(id) {
    this.setState({
      modal: {
        id: id,
        status: DEPARTMENT
      }
    });
  }
  // --------------------------------------------------
  // END DEPARTMENT MODULE
  // --------------------------------------------------

  render() {
    const {
      loading,
      rooms,
      room,
      levels,
      level,
      departments,
      department
    } = this.state;

    return (<div className="content-wrapper">
      <section className="content-header">
        <h1>
          Master Data
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-dashboard"></i>
              Home</Link>
          </li>
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
                  </div>
                  <div className="box-body">
                    <form className="form custom-horizontal" onSubmit={this.handleRoom}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" value={room.name || ''} onChange={e => this.roomChange(e)} type="text" className="form-control" placeholder="Enter name..." required="required"/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="name">Description</label>
                            <input id="description" value={room.description || ''} onChange={e => this.roomChange(e)} type="text" className="form-control" placeholder="Enter description..."/>
                          </div>
                        </div>
                        <div className="col-lg-2 add-button">
                          <button type="submit" className="btn btn-primary"> {room.saving ? <span className="fa fa-refresh fa-spin"/> : null} {room.btnText}</button>
                          {
                            (room.isEdit === true)
                              ? <button onClick={this.handleCancelEditRoom} type="button" className="btn btn-default pull-right">Cancel</button>
                              : null
                          }
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Rooms</h3>
                  </div>
                  <div className="box-body">

                    <ReactTable data={rooms} columns={[
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
                        }, {
                          filterable: false,
                          sortable: false,
                          width: 70,
                          accessor: '_id',
                          Cell: props => <button onClick={() => this.showEditRoom(props.value)} className="btn btn-block btn-primary btn-sm">Edit</button>
                        }, {
                          filterable: false,
                          sortable: false,
                          width: 70,
                          accessor: '_id',
                          Cell: props => <button onClick={() => this.showConfirmDeleteRoom(props.value)} ref="myModal" className="btn btn-block btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">Delete</button>
                        }
                      ]} defaultPageSize={10} loading={loading} className="-striped -highlight"/>
                    <br/>

                  </div>

                </div>
              </TabPanel>
              <TabPanel>
                <div className="box box-success">
                  <div className="box-header">
                    <h3 className="box-title">Add a department</h3>
                    <p className="text-muted">Enter a department that has in your school below to allow the subject can be relate to it.</p>
                  </div>
                  <div className="box-body">
                    <form className="form custom-horizontal" onSubmit={this.handleDepartment}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" value={department.name || ''} onChange={e => this.departmentChange(e)} type="text" className="form-control" placeholder="Enter name..." required="required"/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="name">Description</label>
                            <input id="description" value={department.description || ''} onChange={e => this.departmentChange(e)} type="text" className="form-control" placeholder="Enter description..."/>
                          </div>
                        </div>
                        <div className="col-lg-2 add-button">
                          <button type="submit" className="btn btn-success">{department.saving ? <span className="fa fa-refresh fa-spin"/> : null}{department.btnText}</button>
                          {
                            (department.isEdit === true)
                              ? <button onClick={this.handleCancelEditDepartment} type="button" className="btn btn-default pull-right">Cancel</button>
                              : null
                          }
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Departments</h3>
                  </div>
                  <div className="box-body">

                    <ReactTable data={departments} columns={[
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
                        }, {
                          filterable: false,
                          sortable: false,
                          width: 70,
                          accessor: '_id',
                          Cell: props => <button onClick={() => this.showEditDepartment(props.value)} className="btn btn-block btn-primary btn-sm">Edit</button>
                        }, {
                          filterable: false,
                          sortable: false,
                          width: 70,
                          accessor: '_id',
                          Cell: props => <button onClick={() => this.showConfirmDeleteDepartment(props.value)} ref="myModal" className="btn btn-block btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">Delete</button>
                        }
                      ]} defaultPageSize={10} loading={loading} className="-striped -highlight"/>
                    <br/>

                  </div>

                </div>
              </TabPanel>
              <TabPanel>
                <div className="box box-warning">
                  <div className="box-header">
                    <h3 className="box-title">Add a level</h3>
                    <p className="text-muted">Enter a level that has in your school below to allow the subject can be relate to it.</p>
                  </div>
                  <div className="box-body">
                    <form className="form custom-horizontal" onSubmit={this.handleLevel}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" value={level.name || ''} onChange={e => this.levelChange(e)} type="text" className="form-control" placeholder="Enter name..." required="required"/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="name">Description</label>
                            <input id="description" value={level.description || ''} onChange={e => this.levelChange(e)} type="text" className="form-control" placeholder="Enter description..."/>
                          </div>
                        </div>
                        <div className="col-lg-2 add-button">
                          <button type="submit" className="btn btn-warning">{level.saving ? <span className="fa fa-refresh fa-spin"/> : null}{level.btnText}</button>
                          {
                            (level.isEdit === true)
                              ? <button onClick={this.handleCancelEditLevel} type="button" className="btn btn-default pull-right">Cancel</button>
                              : null
                          }
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Levels</h3>
                  </div>
                  <div className="box-body">

                    <ReactTable data={levels} columns={[
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
                        }, {
                          filterable: false,
                          sortable: false,
                          width: 70,
                          accessor: '_id',
                          Cell: props => <button onClick={() => this.showEditLevel(props.value)} className="btn btn-block btn-primary btn-sm">Edit</button>
                        }, {
                          filterable: false,
                          sortable: false,
                          width: 70,
                          accessor: '_id',
                          Cell: props => <button onClick={() => this.showConfirmDeleteLevel(props.value)} ref="myModal" className="btn btn-block btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">Delete</button>
                        }
                      ]} defaultPageSize={10} loading={loading} className="-striped -highlight"/>
                    <br/>

                  </div>

                </div>
              </TabPanel>

            </Tabs>

          </div>
        </div>
      </section>
      {/* delete model */}
      <div className="modal modal-danger fade" id="modal-danger">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
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
    </div>);
  }
}

export default withCookies(Index);
