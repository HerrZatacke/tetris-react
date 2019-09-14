const width = CONFIG.BOARD_WIDTH;
const height = CONFIG.BOARD_HEIGHT;

const createGameBoard = () => (
  [...new Array(height)].map(() => (
    [...new Array(width)].map(() => (0))
  ))
);

export default createGameBoard;
