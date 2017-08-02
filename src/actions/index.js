export const CHANGE_INSTRUMENT = "CHANGE_INSTRUMENT";
export const CHANGE_SCALE = "CHANGE_SCALE";
export const PLAY_NOTE = "PLAY_NOTE";
export const RESET_GAME = "RESET_GAME";

export function changeInstrument(instrument) {
  return {
    type: CHANGE_INSTRUMENT,
    payload: instrument
  };
}

export function changeScale(scale) {
  return {
    type: CHANGE_SCALE,
    payload: scale
  };
}

export function playNote(note) {
  return {
    type: PLAY_NOTE,
    payload: note
  };
}

export function resetGame() {
  return {
    type: RESET_GAME
  };
}
