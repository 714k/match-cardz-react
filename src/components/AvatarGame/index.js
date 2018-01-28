import React from "react";
import './avatar.css'

export default class AvatarGame extends React.Component {
  render() {
    return (
      <p className="avatar">
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
      </p>
    );
  }
}
