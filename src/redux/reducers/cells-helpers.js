export const createCell = () => ({ value : ``, selected : false });
export const createRow = width => (Array.from(Array(width)).map(createCell));

const updateCellField = (rows, match, key, value) => 
  rows.map((row, i) => 
    row.map((cell, j) => (
              match(i, j, value, cell)
              ?
              { ...cell, [key] : value }
              : 
              cell
            )));

export const updateCellFieldFromCoordinates = (rows, {x, y}, key, value) => {
  const matcher = (i, j) => (i === x && j === y);
  return updateCellField(rows, matcher, key, value);
}

export const updateAllCellsFields = (rows, key, value) => {
  const matcher = () => true;
  return updateCellField(rows, matcher, key, value);
}

export const updateAllSelectedCellsFields = (rows, key, value) => {
  const matcher = (i, j, value, cell) => cell && cell.selected;
  return updateCellField(rows, matcher, key, value);
}

export const updateCellFieldFromRange = (rows, { fromX, fromY, x, y}, key, value) => {
  const x0 = fromX < x ? fromX : x;
  const x1 = fromX < x ? x : fromX;
  const y0 = fromY < y ? fromY : y;
  const y1 = fromY < y ? y : fromY;
  const matcher = (i, j) => (i >= x0 && i <= x1 && j >= y0 && j <= y1);

  return updateCellField(rows, matcher, key, value);
}