import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    return <div>data</div>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.users
  };
}
export default connect(mapStateToProps)(User);
