import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-text">
      <Link to="/" className="nav-link">
        <h1>Title</h1>
      </Link>
      <Link to="/gallery" className="nav-link">
        <h5>Gallery</h5>
      </Link>
      <button className="header-button">Button</button>
    </div>
  );
}
