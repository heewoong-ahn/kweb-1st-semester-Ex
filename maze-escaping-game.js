const minRow = 0;
const maxRow = 6;
const minCol = 0;
const maxCol = 7;
const curPos = { row: maxRow - 1, col: minCol };

const getCellByPosition = (pos) => {
  const cellRow = document.getElementsByClassName("cells")[pos.row];
  cellColWithRow = cellRow.getElementsByClassName("cell")[pos.col];
  return cellColWithRow;
};
const getNewPos = (key) => {
  const pos = {
    row: curPos.row,
    col: curPos.col,
  };
  switch (key) {
    case "ArrowLeft":
      pos.col--;
      break;
    case "ArrowRight":
      pos.col++;
      break;
    case "ArrowUp":
      pos.row--;
      break;
    case "ArrowDown":
      pos.row++;
      break;
  }
  return pos;
};

const posInRange = (pos) =>
  pos.row >= minRow &&
  pos.row <= maxRow &&
  pos.col >= minCol &&
  pos.col <= maxCol;

const posIsWall = (pos) => getCellByPosition(pos).classList.contains("wall");

document.addEventListener("keyup", (event) => {
  getCellByPosition(curPos).classList.remove("current");
  const newPos = getNewPos(event.code);
  if (posInRange(newPos) && !posIsWall(newPos)) {
    curPos.row = newPos.row;
    curPos.col = newPos.col;
  }
  const newCell = getCellByPosition(curPos);
  newCell.classList.add("current");
  if (newCell.classList.contains("target")) alert("You escaped!");
});
