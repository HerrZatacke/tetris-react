const cleanCompletedLines = (gameBoard) => {
  const height = gameBoard.length;

  const remaining = gameBoard.filter(row => (
    row.filter(Boolean).length !== row.length
  ));

  const rowsRemoved = height - remaining.length;

  const nextBoard = [
    ...[...new Array(rowsRemoved)].map(() => gameBoard[0].map(() => (0))),
    ...remaining,
  ];

  return {
    gameBoard: nextBoard,
    rowsRemoved,
  };
};

export default cleanCompletedLines;
