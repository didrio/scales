import { RESET_GAME } from "../actions";

export default function(state = 0, action) {
  if (action.type === RESET_GAME) {
    return state + 1;
  }
  return state;
}
