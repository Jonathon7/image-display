import React, { Component } from "react";
import "./home.css";
import Images from "../components/Images";

export default class Home extends Component {
  render() {
    return (
      <div className="home-cont">
        <div className="nav-text">
          <h1>Title</h1>
          <button>Button</button>
        </div>
        <div className="header-text">
          <h1>Header</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam
            officiis, minus ea expedita eligendi adipisci porro reiciendis
            voluptate quibusdam cum mollitia vitae possimus fugit aut itaque nam
            quod unde.
          </h3>
        </div>
        <Images />
      </div>
    );
  }
}
