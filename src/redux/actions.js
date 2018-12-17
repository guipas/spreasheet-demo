import { UPDATE_CELL, SELECT_CELL, SELECT_TO_CELL, UPDATE_ALL_SELECTED_CELLS } from "./actionTypes";

export const updateCell = (x, y, value) => ({
  type: UPDATE_CELL,
  payload: { x, y, value },
});

export const updateSelectedCells = value => ({
  type: UPDATE_ALL_SELECTED_CELLS,
  payload: { value },
});


export const selectCell = (x, y) => ({
  type: SELECT_CELL,
  payload: { x, y },
});


export const selectToCell = (x, y) => ({
  type: SELECT_TO_CELL,
  payload: { x, y },
});
