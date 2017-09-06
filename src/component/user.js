import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  selectAction,
  deleteAction,
  editAction,
  addAction
} from "../action/index";
import UserList from "./userlist";
import UserActive from "./user-active";
import UserAdd from "./user-add";
class User extends React.Component {
  renderUser(todo, index) {
    return (
      <UserList
        key={index}
        todo={todo}
        selectAction={this.props.selectAction}
        editTodo={this.props.editAction}
        deleteTodo={this.props.deleteAction}
      />
    );
  }
  render() {
    return (
      <div className="PageContent">
        <div className="PageLeft">
          <div className="TodoList">
            <h1 className="TodoList-header">Todos</h1>
            <nav className="TodoList-body">
              {this.props.users.map((todo, i) => this.renderUser(todo, i))}
            </nav>
          </div>
        </div>
        <div className="PageRight">
          <UserAdd addTodo={this.props.addAction} />
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
      selectAction,
      deleteAction,
      editAction,
      addAction
    },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(User);
