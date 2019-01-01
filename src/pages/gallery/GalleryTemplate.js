import React, { Component } from "react";
import "./gallerytemplate.css";

export default class GalleryTemplate extends Component {
  render() {
    return (
      <div className="gallery-imgs-cont">
        <img src={this.props.url} alt="" className="img" width="90%" />
        <div className="gallery-img-drop">
          <div className="gallery-img-text">
            <h3>{this.props.title}</h3>
            <h3>{this.props.date}</h3>
          </div>
          <div>
            <button
              className="gallery-delete"
              onClick={e => this.props.handleDelete(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
