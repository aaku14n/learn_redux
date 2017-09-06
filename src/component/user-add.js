import React from "react";
import "../css/UserAdd.css";

export default class UserAdd extends React.Component {
  render() {
    return (
      <div>
        <h1>Add User</h1>
        Welcome<br />
        <input
          type="text"
          className="User-add-title-input"
          id="User-add-title"
        />
        <br />
        <textarea
          name="description"
          className="User-add-description-input"
          id="User-add-description"
        />
        <br />
        <button
          type="button"
          value="Save"
          className="User-add-button"
          onClick={e => this.addUser()}
        >
          Save
        </button>
        <button
          type="reset"
          value="Reset"
          className="User-add-button"
          onClick={e => this.UserAddReset()}
        >
          Reset
        </button>
      </div>
    );
  }
  addUser() {
    let title = document.getElementById("User-add-title").value;
    let description = document.getElementById("User-add-description").value;
    this.UserAddReset();
    if (title === "" || description === "") {
      return true;
    }
    let User = {};
    User.title = title;
    User.description = description;
    User.status = 1;
    this.props.addUser(User);
  }

  UserAddReset() {
    document.getElementById("User-add-title").value = "";
    document.getElementById("User-add-description").value = "";
  }
}
