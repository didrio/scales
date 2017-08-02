import { CHANGE_INSTRUMENT } from "../actions";

export default function(state = "starbell", action) {
  switch(action.type) {
    case CHANGE_INSTRUMENT:
      return action.payload;
      break;
  }
  return state;
}
