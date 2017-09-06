import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectAction } from "../action/index";
import UserList from "./userlist";
import UserActive from "./user-active";
class User extends React.Component {
  renderUser(todo, index) {
    return (
      <UserList
        key={index}
        todo={todo}
        selectAction={this.props.selectAction}
        editTodo={todo => this.editTodo(todo)}
        deleteTodo={todo => this.deleteTodo(todo)}
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
              {this.props.user.map((todo, i) => this.renderUser(todo, i))}
            </nav>
          </div>
        </div>
        <div className="PageRight">
          <UserActive />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.users
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectAction: selectAction }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(User);
