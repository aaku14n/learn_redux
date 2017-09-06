import React from "react";
import "../App.css";
import User from "./user";
import Header from "./header";
import Footer from "./footer";
export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <User />
        <Footer />
      </div>
    );
  }
}
