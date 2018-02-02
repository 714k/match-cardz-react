import React from "react";
import './menu.css'

export default class MenuGame extends React.Component {
  render() {
    return (
      <nav className="menu">
        <p className="iconMenu">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </p>
      </nav>
    );
  }
}
