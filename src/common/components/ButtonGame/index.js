import React from "react";
import './button.css'

export default class ButtonGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classButton: null,
      event: null,
      titleButton: null
    };
  }
  render() {
    return (
      <button 
        className={this.props.classButton}
        onClick={this.props.event}>
        {this.props.titleButton}
      </button>
    );
  }
}
