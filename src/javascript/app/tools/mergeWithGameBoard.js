const mergeWithGameBoard = (gameBoard, { shape, x, y }) => (
  [...gameBoard].map((row, rowIndex) => (
    row.map((cell, colIndex) => (
      cell || (
        shape[colIndex - x] &&
        shape[colIndex - x][rowIndex - y]
      )
    ))
  ))
);

export default mergeWithGameBoard;
