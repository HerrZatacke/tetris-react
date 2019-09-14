import checkIntersect from '../../tools/checkIntersect';

const shiftCurrentPart = (direction, gameBoard, currentPart, dispatch) => {
  if (!currentPart) {
    return;
  }

  const newPart = {
    ...currentPart,
    x: currentPart.x + direction.x,
    y: currentPart.y + direction.y,
  };

  const intersect = checkIntersect(gameBoard, newPart);

  if (!intersect) {
    dispatch({
      type: 'UPDATE_CURRENT_PART',
      payload: newPart,
    });
  }

  if (intersect && direction.y !== 0) {
    dispatch({
      type: 'GAME_TICK',
    });
  }
};

export default shiftCurrentPart;
