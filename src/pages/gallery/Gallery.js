import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import GalleryTemplate from "./GalleryTemplate";
import axios from "axios";
import "./gallery.css";

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      img: [],
      title: "",
      date: "",
      url: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/images")
      .then(res => {
        this.setState({
          img: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = () => {
    axios
      .post("/api/images", {
        title: this.state.title,
        date: this.state.date,
        url: this.state.url
      })
      .then(res => {
        this.setState({
          img: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = id => {
    axios
      .delete(`/api/images/${id}`)
      .then(res => {
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
        <GalleryTemplate
          key={index}
          url={image.url}
          title={image.title}
          date={image.date}
          handleDelete={this.handleDelete}
          id={image.id}
        />
      );
    });
    return (
      <div>
        <Navbar />
        <div className="gallery-cont">
          <div className="gallery-img">
            <h3 className="message">
              ***This is will be a protected route when the site goes live. So
              this page will only be viewable by the owner of the site and no
              one else. And the Gallary link on the navigation bar will not be
              there. Also the app crashes when you refresh on the gallery page.
              I'm fixing it soon though.
            </h3>
            <h1 className="gallery-header">Gallery</h1>
            <div className="gallery-input">
              <h4>Title:</h4>
              <input
                type="text"
                onChange={e => this.setState({ title: e.target.value })}
              />
              <h4>Date:</h4>
              <input
                type="text"
                onChange={e => this.setState({ date: e.target.value })}
              />
              <h4>Url:</h4>
              <input
                type="text"
                onChange={e => this.setState({ url: e.target.value })}
              />
              <button onClick={this.handleClick}>Add Image</button>
            </div>
          </div>
          <div className="gallery-images-cont">{dispImages}</div>
        </div>
      </div>
    );
  }
}
