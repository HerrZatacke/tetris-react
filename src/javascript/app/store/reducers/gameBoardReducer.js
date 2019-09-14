import createGameBoard from '../../tools/createGameBoard';

const gameBoardReducer = (gameBoard = createGameBoard(), action) => {
  switch (action.type) {
    case 'UPDATE_GAME_BOARD':
      return action.payload.gameBoard;
    case 'START_GAME':
      return createGameBoard();
    default:
      return gameBoard;
  }
};

export default gameBoardReducer;
