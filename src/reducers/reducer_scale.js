import { CHANGE_SCALE } from "../actions";

const majorScale = ["C", "D", "E", "F", "G", "A", "B", "Co"];
const minorScale = ["C", "D", "Eb", "F", "G", "Ab", "Bb", "Co"];

export default function(state = majorScale, action) {
  if (action.type === CHANGE_SCALE) {
    switch(action.payload) {
      case "major":
        return majorScale;
        break;
      case "minor":
        return minorScale;
        break;
    }
  }
  return state;
}
