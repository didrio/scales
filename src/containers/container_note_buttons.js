import React, { Component } from 'react';
import NoteButton from '../components/note_button';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { playNote } from "../actions";
import _ from "lodash";

class ContainerNoteButtons extends Component {
  componentDidMount() {
    var notes = ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "Co"];
    notes.forEach(note => {
      new Howl({
        src: [`./src/audio/starbell/${note}.mp3`],
        volume: 0
      }).play();
      new Howl({
        src: [`./src/audio/piano/${note}.mp3`],
        volume: 0
      }).play();
      new Howl({
        src: [`./src/audio/fuzzbass/${note}.mp3`],
        volume: 0
      }).play();
      new Howl({
        src: [`./src/audio/ding.mp3`],
        volume: 0
      }).play();
    });
  }
  randomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }
  handleClick(note) {
    this.props.playNote(note);
    var volumeLevel = (this.props.instrument === "piano") ? 3.6 : 9;
    const sound = new Howl({
      src: [`./src/audio/${this.props.instrument}/${note}.mp3`],
      volume: volumeLevel
    });
    sound.play();
    document.querySelector(`#${note}`).classList.add("clicked");
    if (note === "C") {
      var buttons = document.querySelectorAll(".button");
      buttons.forEach(button => button.classList.remove("clicked"));
      document.querySelector("#C").classList.add("clicked");
    }
  }
  renderNoteButtons() {
    var notes = ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "Co"];
    var shuffledNotes = _.shuffle(notes);
    return shuffledNotes.map(note => {
      return (
        <div key={note} className="col-xs-4 col-md-3 flex-center">
          <NoteButton click={() => this.handleClick(note)}
            text="" note={note} color={this.randomColor()} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 flex-center">
              <NoteButton click={() => this.handleClick("C")}
              text="" note="C" color={this.randomColor()}/>
          </div>
        </div>
        <div className="row">
          {this.renderNoteButtons()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instrument: state.instrument,
    scale: state.scale
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({playNote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerNoteButtons);
