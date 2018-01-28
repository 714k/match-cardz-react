import React from "react";
import AvatarGame from "../AvatarGame";
import UserNameGame from "../UserNameGame";
import ScoreGame from "../ScoreGame";
import './gamebar.css'

export default class GameBar extends React.Component {
  render() {
    return (
      <div className="gamebar">
        <AvatarGame />
        <UserNameGame />
        <ScoreGame />
      </div>
    );
  }
}
