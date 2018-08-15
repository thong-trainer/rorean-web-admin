import React from "react";

export default class DeleteButton extends React.Component {
  // constructor(props) {
  //   super();
  //   this.deleteItem = this.deleteItem.bind(this);
  //   console.log("Delete Button");
  //   console.log(props);
  // }
  //
  // deleteItem() {
  //   console.log("The item to delete is : ", this.props.item);
  // }

  // var handleDeleteItem = event => {
  //   console.log(event.target);
  // }
  //
  // var deleteItem = item => {
  //   console.log("The item to delete is : ", item);
  // }

  render() {

    // var handleClick;
    //
    // handleClick = this.props.item;
    // // or
    // handleDeleteItem = () => this.props.deleteItem();

    return (
        <button className='btn btn-block btn-danger btn-sm'>Delete</button>
    );
  }
}
