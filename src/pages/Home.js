import React, { Component } from "react";
import "./home.css";
import Images from "../components/Images";
import Navbar from "../components/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home-cont">
          <div className="header-text">
            <h1>Header Text That Says Something</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam
              officiis, minus ea expedita eligendi adipisci porro reiciendis
              voluptate quibusdam cum mollitia vitae possimus fugit aut itaque
              nam quod unde.
            </h3>
          </div>
          <div className="images-cont">
            <Images />
          </div>
        </div>
      </div>
    );
  }
}
