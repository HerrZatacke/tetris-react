const checkIntersect = (gameBoard, { shape, x, y }) => {

  // check if outside left/right
  if (
    shape.find((row, index) => (
      row.find(cell => (
        cell && (
          x + index < 0 || // outside board left
          x + index >= gameBoard[0].length // outside board right
        )
      ))
    ))
  ) {
    return true;
  }

  // check collision with gameboard
  if (
    [
      ...gameBoard,
      gameBoard[0].map(() => (1)),
    ].find((row, rowIndex) => (
      row.find((cell, colIndex) => (
        cell && (
          shape[colIndex - x] &&
          shape[colIndex - x][rowIndex - y]
        )
      ))
    ))
  ) {
    return true;
  }

  return false;
};

export default checkIntersect;
