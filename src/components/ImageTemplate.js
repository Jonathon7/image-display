import React, { Component } from "react";
import "./imagetemplate.css";

export default class ImageTemplate extends Component {
  render() {
    return (
      <div className="imgs-cont">
        <img src={this.props.url} alt="" className="img" width="90%" />
        <div className="img-text">
          <h3>{this.props.title}</h3>
          <h3>{this.props.date}</h3>
        </div>
      </div>
    );
  }
}
