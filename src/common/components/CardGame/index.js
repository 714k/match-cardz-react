import React from "react";
import "./card.css";

export default class CardGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      classCard: null
    };
  }
  render() {
    return (
      <div className={this.props.classCard}>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
