const clearedLinesReducer = (clearedLines = 0, action) => {
  switch (action.type) {
    case 'UPDATE_GAME_BOARD':
      return clearedLines + action.payload.rowsRemoved;
    case 'START_GAME':
      return 0;
    default:
      return clearedLines;
  }
};

export default clearedLinesReducer;
