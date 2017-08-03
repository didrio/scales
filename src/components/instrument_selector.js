import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeInstrument } from "../actions";

class InstrumentSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: this.props.instrument
    };
  }
  handleClick(instrument) {
    this.setState({instrument: instrument}, () => {
      this.props.changeInstrument(instrument);
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
          className="headerButton" style={(this.state.instrument === "starbell") ? backgroundStyle : null}
          onClick={() => this.handleClick("starbell")}>Star Bell</button>
        <button
          className="headerButton" style={(this.state.instrument === "piano") ? backgroundStyle : null}
          onClick={() => this.handleClick("piano")}>Piano</button>
        <button
          className="headerButton" style={(this.state.instrument === "fuzzbass") ? backgroundStyle : null}
          onClick={() => this.handleClick("fuzzbass")}>Fuzz Bass</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { instrument: state.instrument };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeInstrument}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSelector);
