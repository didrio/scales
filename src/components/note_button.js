import React, { Component } from 'react';

class NoteButton extends Component {
  render() {
    return (
      <div id={this.props.note} className="button flex-center" style={{backgroundColor: this.props.color}} onClick={this.props.click}>
        {this.props.text}
      </div>
    );
  }
}

export default NoteButton;
