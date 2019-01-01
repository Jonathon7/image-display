import React, { Component } from "react";
import "./images.css";
import axios from "axios";
import ImageTemplate from "./ImageTemplate";

export default class Images extends Component {
  constructor() {
    super();

    this.state = {
      img: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3004/api/images")
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
    let dispImages = this.state.img.map((image, index) => {
      return (
        <ImageTemplate
          key={index}
          url={image.url}
          title={image.title}
          date={image.date}
        />
      );
    });
    return <div className="image-cont">{dispImages}</div>;
  }
}
