import handleKeyboard from './middleware/handleKeyboard';
import handleGameTick from './middleware/handleGameTick';
import transformCurrentPart from './middleware/transformCurrentPart';
import shiftCurrentPart from './middleware/shiftCurrentPart';

const middleware = (store) => {
  const { dispatch } = store;

  handleKeyboard(dispatch);

  return next => (action) => {
    const {
      clearedLines,
      currentPart,
      gameBoard,
      nextPart,
      tick,
    } = store.getState();

    switch (action.type) {
      case 'TRANSFORM_CURRENT_PART':
        transformCurrentPart(action.payload, gameBoard, currentPart, dispatch);
        return;
      case 'SHIFT_CURRENT_PART':
        shiftCurrentPart(action.payload, gameBoard, currentPart, dispatch);
        return;
      case 'GAME_TICK':
        handleGameTick(clearedLines, tick, gameBoard, currentPart, nextPart, dispatch);
        return;
      default:
        break;
    }

    next(action);
  };
};

export default middleware;
