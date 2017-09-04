import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectAction } from "../action/index";
class User extends React.Component {
  print(user) {
    return <h1 onClick={() => this.props.selectAction(user)}>{user.id}</h1>;
  }
  render() {
    return <div>{this.props.user.map(post => this.print(post))}</div>;
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
