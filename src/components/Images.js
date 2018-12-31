import React, { Component } from "react";
import "./images.css";
import lion from "../images/green-lion.jpg";
import smallLion from "../images/small-lion.jpg";
import wolf from "../images/wolf.jpg";

export default class Images extends Component {
  constructor() {
    super();

    this.state = {
      img: []
    };
  }
  render() {
    let dispImages = this.state.img.map((image, index) => {
      return (
        <div key={index}>
          <img src={image.url} alt="" />
        </div>
      );
    });
    return (
      <div className="image-cont">
        <img src={lion} alt="" width="90%" className="img" />
        <img src={smallLion} alt="" width="90%" className="img" />
        <img src={wolf} alt="" width="90%" className="img" />
        <img src={lion} alt="" width="90%" className="img" />
        <img src={smallLion} alt="" width="90%" className="img" />
        <img src={wolf} alt="" width="90%" className="img" />
        <img src={lion} alt="" width="90%" className="img" />
        <img src={smallLion} alt="" width="90%" className="img" />
        <img src={wolf} alt="" width="90%" className="img" />
      </div>
    );
  }
}
