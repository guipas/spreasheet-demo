import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import { updateCell, selectCell, selectToCell, updateSelectedCells } from "../redux/actions";


const Sheet = ({ rows, selectCell, selectToCell, updateSelectedCells, selectedCellValue }) => (
  <div>
    <div className="command">
      <input type="text" value={selectedCellValue} onChange={e => updateSelectedCells(e.target.value )}/>
    </div>
    <div className="rows">
      {rows.map((row, x) => {
        return (
          <div className="row" key={`row-${x}`}>
              {row.map((cell, y) => {
                return [
                    (y === 0 ? (<div key={`h${x}_${y}`} className="cell cell-head">{x}</div>) : ''),
                    (<Cell 
                      key={`${x}_${y}`}
                      selected={cell.selected}
                      onChange={e => updateSelectedCells(e.target.value )}
                      onMouseDown={e => { selectCell(x, y); e.preventDefault(); }}
                      onMouseUp={e => { selectToCell(x, y)}}
                    >
                      {cell.value}
                    </Cell>)
                ];
              })}
            </div>
        );
      })}
    </div>

  </div>
);

const mapStateToProps = state => {
  return {
    rows : state.cells.rows,
    selectedCellValue : state.cells.selectedCellValue,
  };
};

export default connect(mapStateToProps, { updateCell, selectCell, selectToCell, updateSelectedCells })(Sheet);