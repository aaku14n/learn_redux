import React, { Component } from "react";
import "../css/UserList.css";

export default class UserList extends Component {
  renderTitle(User) {
    return (
      <div className="User-title">
        <div>
          <b>Title-</b> &nbsp;
          <div id={"title" + User._id}>{User.title}</div>
          <br />
        </div>
      </div>
    );
  }

  renderBody(User) {
    return (
      <div className="User-body">
        <div className="User-description">
          <b>Description </b>
          <div id={"des" + User._id}>{User.description}</div>
        </div>
      </div>
    );
  }

  renderButtons(User) {
    return (
      <div className="User-buttons">
        <button
          title="Edit"
          className="User-edit-button"
          id={User._id}
          onClick={() => this.UserEditShow(User)}
        >
          &#9998;
        </button>
        <button
          title="Delete"
          className="User-delete-button"
          onClick={e => this.props.deleteUser(User)}
        >
          &#10008;
        </button>
      </div>
    );
  }

  render() {
    const { User, selectAction } = this.props;
    return User.status ? (
      <div className="User" onClick={() => selectAction(User)}>
        {this.renderButtons(User)}
        {this.renderTitle(User)}
        {this.renderBody(User)}
        {this.renderUserEdit(User)}
      </div>
    ) : (
      <div />
    );
  }

  renderUserEdit(User) {
    return (
      <div className={"User-Body-Edit User-Body-Edit-" + User._id}>
        <input
          type="text"
          id={"User-Body-Edit-Title-" + User._id}
          className="User-Body-Edit-Title"
          placeholder={User.title}
        />
        <br />
        <input
          type="text"
          id={"User-Body-Edit-Description-" + User._id}
          className="User-Body-Edit-Description"
          placeholder={User.description}
        />
        <br />
        <button
          className="User-Body-Edit-Save"
          onClick={e => this.UserEditSave(User._id)}
        >
          Edit
        </button>
        <button
          className="User-Body-Edit-Reset"
          onClick={e => this.UserEditCancle(User._id)}
        >
          Cancel
        </button>
      </div>
    );
  }
  UserEditCancle(id) {
    document.getElementsByClassName("User-Body-Edit-" + id)[0].style.display =
      "none";
  }
  UserEditShow(User) {
    document.getElementsByClassName("User-Body-Edit")[0].style.display = "none";
    document.getElementsByClassName(
      "User-Body-Edit-" + User._id
    )[0].style.display =
      "block";
  }

  UserEditSave(id) {
    let task = {};
    task._id = id;
    task.title = document.getElementById("User-Body-Edit-Title-" + id).value;
    task.description = document.getElementById(
      "User-Body-Edit-Description-" + id
    ).value;
    this.props.editUser(task);
    document.getElementsByClassName("User-Body-Edit-" + id)[0].style.display =
      "none";
  }
}
