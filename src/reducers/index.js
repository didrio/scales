import { combineReducers } from 'redux';
import InstrumentReducer from "./reducer_instrument.js";
import ScaleReducer from "./reducer_scale.js";
import PlayedNotesReducer from "./reducer_played_notes.js";
import ScoreReducer from "./reducer_score.js";

const rootReducer = combineReducers({
  instrument: InstrumentReducer,
  scale: ScaleReducer,
  playedNotes: PlayedNotesReducer,
  score: ScoreReducer
});

export default rootReducer;
