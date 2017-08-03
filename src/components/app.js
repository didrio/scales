import React, { Component } from 'react';
import ContainerNoteButtons from "../containers/container_note_buttons.js";
import InstrumentSelector from "./instrument_selector.js";
import ScaleSelector from "./scale_selector.js";
import WinScreen from "./win_screen";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetGame } from "../actions";

class App extends Component {
  renderApp() {
    if (this.props.scale.toString() === this.props.playedNotes.toString()) {
      if (this.props.score === 4) {
        const sound = new Howl({
          src: [`./src/audio/WinSong.mp3`],
          volume: 0.4
        });
        sound.play();
        setInterval(function(){
          var body = document.querySelector("body");
          if (body.classList.contains("winBg")) {
            body.classList.remove("winBg");
          } else {
            body.classList.add("winBg");
          }
        }, 545.45455);
        return (
          <div className="container">
            <div className="row">
              <div className="col-xs-12 flex-center secret-song">
                SECRET SONG!
              </div>
            </div>
          </div>
        );
      }
      const sound = new Howl({
        src: [`./src/audio/ding.mp3`],
        volume: 0.25
      });
      sound.play();
      setTimeout(() => this.props.resetGame(), 4000);
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 flex-center">
              <img src="./src/check.jpg" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="header">
            <span className="site-label">Welcome to Scales!</span><br /><br />
            <span>
              The top button is always the root note
              <br />
              Every other button plays a different note and is randomly placed on the grid
              <br />
              Try to play the given scale in the correct order
              <br />
              Get your score to 5 and you get to hear the secret song
              <br />
              Your current score is {this.props.score}
              <br /><br />
            </span>
            <hr />
            <span className="header-label">Instrument</span>
            <InstrumentSelector />
            <hr />
            <span className="header-label">Scale</span>
            <ScaleSelector />
          </div>
          <div className="game">
            <ContainerNoteButtons />
          </div>
        </div>
      );
    }
  }
  render() {
    return this.renderApp();
  }
}

function mapStateToProps(state) {
  return {
    scale: state.scale,
    playedNotes: state.playedNotes,
    score: state.score
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({resetGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
