import React, { Component } from "react";
import "./images.css";
import axios from "axios";
import ImageTemplate from "./ImageTemplate";
import greenLion from "../images/green-lion.jpg";

export default class Images extends Component {
  constructor() {
    super();

    this.state = {
      img: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/images")
      .then(res => {
        console.log(res);
        this.setState({
          img: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    var dispImages = this.state.img.map((image, index) => {
      return (
        <ImageTemplate
          key={index}
          url={image.url}
          title={image.title}
          date={image.date}
        />
      );
    });

    return (
      <div className="image-cont">
        {dispImages}
        <img src={greenLion} alt="" />
      </div>
    );
  }
}
