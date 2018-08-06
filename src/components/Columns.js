import React, { Component } from "react";

class Columns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: this.props.color
    };
  }

  render() {
    return (
      <div
        className="Columns"
        style={{
          color: this.props.color,
          "width:": this.props.width
        }}
      >
        <img
          class="imgStar"
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg"
        />
        <div className="colText">{this.props.text}</div>
      </div>
    );
  }
}

export default Columns;
