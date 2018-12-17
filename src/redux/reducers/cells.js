import { UPDATE_CELL, SELECT_CELL, SELECT_TO_CELL, UPDATE_ALL_SELECTED_CELLS } from "../actionTypes";
import { createRow, updateCellFieldFromCoordinates, updateCellFieldFromRange, updateAllCellsFields, updateAllSelectedCellsFields } from "./cells-helpers";

const defaultWidth = 50;
const defaultHeight = 50;

const initialState = {
  rows : Array.from(Array(defaultHeight)).map(() => createRow(defaultWidth)),
  width: 10,
  height: 10,
  currentSelection : null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CELL: {
      const { x, y, value } = action.payload;
      return {
        ...state,
        rows : updateCellFieldFromCoordinates(state.rows, {x, y}, `value`, value),
      };
    }
    case UPDATE_ALL_SELECTED_CELLS: {
      const { value } = action.payload;
      return {
        ...state,
        rows : updateAllSelectedCellsFields(state.rows, `value`, value),
      };
    }
    case SELECT_CELL: {
      const {x , y} = action.payload;
      return {
        ...state,
        currentSelection : { x, y },
        rows : updateCellFieldFromCoordinates(
          updateAllCellsFields(state.rows, `selected`, false), 
          {x, y}, 
          `selected`, 
          true
        ),
      }
    }
    case SELECT_TO_CELL: {
      const {x , y} = action.payload;
      const fromX = state.currentSelection ? state.currentSelection.x : x;
      const fromY = state.currentSelection ? state.currentSelection.y : y;
      if (x !== fromX || y !== fromY) {
        return {
          ...state,
          rows : updateCellFieldFromRange(state.rows, {x, y, fromX, fromY}, `selected`, true),
        }
      }

    }
    default:
      return state;
  }
}
