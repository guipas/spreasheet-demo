import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import { updateCell, selectCell, selectToCell, updateSelectedCells } from "../redux/actions";


const Sheet = ({ rows, selectCell, selectToCell, updateSelectedCells }) => (
  <div className="rows">
    {rows.map((row, x) => {
      return (
        <div className="row" key={`row-${x}`}>
            {row.map((cell, y) => {
              return (
                <Cell 
                  key={`${x}_${y}`}
                  selected={cell.selected}
                  onChange={e => updateSelectedCells(e.target.value )}
                  onMouseDown={e => selectCell(x, y)}
                  onMouseUp={e => selectToCell(x, y)}
                >
                  {cell.value}
                </Cell>
              );
            })}
          </div>
      );
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    rows : state.cells.rows,
  };
};

export default connect(mapStateToProps, { updateCell, selectCell, selectToCell, updateSelectedCells })(Sheet);