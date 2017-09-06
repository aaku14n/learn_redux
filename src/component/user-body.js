import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  selectUserAction,
  deleteUserAction,
  editUserAction,
  addUserAction
} from "../action/index";
import UserList from "./user-list";
import UserAdd from "./user-add";
class Body extends React.Component {
  renderUser(User, index) {
    return (
      <UserList
        key={index}
        User={User}
        selectAction={this.props.selectUserAction}
        editUser={this.props.editUserAction}
        deleteUser={this.props.deleteUserAction}
      />
    );
  }
  render() {
    return (
      <div className="PageContent">
        <div className="PageLeft">
          <div className="UserList">
            <h1 className="UserList-header">Users</h1>
            <nav className="UserList-body">
              {this.props.users.map((User, i) => this.renderUser(User, i))}
            </nav>
          </div>
        </div>
        <div className="PageRight">
          <UserAdd addUser={this.props.addUserAction} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectUserAction,
      deleteUserAction,
      editUserAction,
      addUserAction
    },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(Body);
