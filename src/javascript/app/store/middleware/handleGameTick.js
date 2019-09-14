import checkIntersect from '../../tools/checkIntersect';
import mergeWithGameBoard from '../../tools/mergeWithGameBoard';
import cleanCompletedLines from '../../tools/cleanCompletedLines';
import getTickInterval from '../../tools/getTickInterval';

const handleGameTick = (clearedLines, tick, gameBoard, currentPart, nextPart, dispatch) => {

  const part = currentPart || nextPart;

  const updatedPart = {
    ...part,
    y: part.y + 1,
  };

  if (!currentPart) {
    dispatch({
      type: 'NEXT_PART',
    });
  }

  if (!checkIntersect(gameBoard, updatedPart)) {
    dispatch({
      type: 'UPDATE_CURRENT_PART',
      payload: updatedPart,
    });
  } else {
    dispatch({
      type: 'UPDATE_GAME_BOARD',
      payload: cleanCompletedLines(mergeWithGameBoard(gameBoard, part)),
    });

    // new part instatly intersects with board!
    if (!currentPart) {
      dispatch({
        type: 'UPDATE_GAME_TICK',
        payload: null,
      });
      return;
    }
  }

  window.clearInterval(tick);
  dispatch({
    type: 'UPDATE_GAME_TICK',
    payload: window.setTimeout(() => {
      dispatch({
        type: 'GAME_TICK',
      });
    }, getTickInterval(clearedLines)),
  });
};

export default handleGameTick;
