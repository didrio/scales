import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeScale } from "../actions";

class ScaleSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: "major"
    };
  }
  handleClick(scale) {
    this.setState({scale: scale}, () => {
      this.props.changeScale(scale);
      var buttons = document.querySelectorAll(".button");
      buttons.forEach(button => button.classList.remove("clicked"));
    });
  }
  render() {
    const backgroundStyle = {
      backgroundColor: "#0275D8",
      color: "white"
    };
    return (
      <div>
        <button
          className="headerButton" style={(this.state.scale === "major") ? backgroundStyle : null}
          onClick={() => this.handleClick("major")}>Major</button>
        <button
          className="headerButton" style={(this.state.scale === "minor") ? backgroundStyle : null}
          onClick={() => this.handleClick("minor")}>Minor</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeScale}, dispatch);
}

export default connect(null, mapDispatchToProps)(ScaleSelector);
