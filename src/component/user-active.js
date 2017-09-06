import React from "react";
import { connect } from "react-redux";
class UserActive extends React.Component {
  render() {
    return this.props.activeUser == null ? (
      <div>Please Select user</div>
    ) : (
      <div>{this.props.activeUser.title}</div>
    );
  }
}

function mapStateToProps(state) {
  return { activeUser: state.activeUser };
}

export default connect(mapStateToProps)(UserActive);
