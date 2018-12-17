import React from "react";

const Cell = ({children, onChange, onClick, onMouseDown, onMouseUp, selected}) => (
  <input 
    className={`cell ${selected ? 'selected' : ''}`} 
    type="text" 
    value={children || ''}
    onChange={onChange}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
  />
);

export default Cell;
