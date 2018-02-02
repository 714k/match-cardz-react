import React from "react";
import MenuGame from "../MenuGame";
import './header.css'

export default class HeaderGame extends React.Component {
  render() {
    return (
      <header>
        <MenuGame />
        <h1>pininosReact</h1>
      </header>
    );
  }
}
