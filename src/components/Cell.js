import React from "react";

const Cell = ({children, onChange, onClick, onMouseDown, onMouseUp, selected}) => (
  <div
    className={`cell ${selected ? 'selected' : ''}`} 
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
  >
    {children}
  </div>

);

export default Cell;
