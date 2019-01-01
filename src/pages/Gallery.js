import React, { Component } from "react";
import greenLion from "../images/green-lion.jpg";
import smallLion from "../images/small-lion.jpg";
import wolf from "../images/wolf.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <img src={greenLion} alt="" />
        <img src={smallLion} alt="" />
        <img src={wolf} alt="" />
      </div>
    );
  }
}
