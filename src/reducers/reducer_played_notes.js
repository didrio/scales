import { PLAY_NOTE } from "../actions";
import { RESET_GAME } from "../actions";

export default function(state = [], action) {
  if (action.type === PLAY_NOTE) {
    if (state.length === 8) {
      const newStateArray = state.slice(1);
      return [...newStateArray, action.payload];
    } else {
      return [...state, action.payload];
    }
  } else if (action.type === RESET_GAME) {
    return [];
  }
  return state;
}
