import React from "react";
import "../App.css";
import Body from "./user-body";
import Header from "./header";
import Footer from "./footer";
export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
