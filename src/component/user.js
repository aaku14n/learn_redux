import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
<<<<<<< HEAD
import { selectAction } from "../action/index";
=======

>>>>>>> b46718e1803eb9ab0e5bb6ea867ff625bb4ad074
class User extends React.Component {
  print(user) {
    return <h1 onClick={() => this.props.selectAction(user)}>{user.id}</h1>;
  }
  render() {
<<<<<<< HEAD
    return <div>{this.props.user.map(post => this.print(post))}</div>;
=======
    return <div>data</div>;
>>>>>>> current
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.users
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectAction: selectAction }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(User);
