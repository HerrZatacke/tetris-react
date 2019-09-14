import transform from '../../tools/transform';
import checkIntersect from '../../tools/checkIntersect';

const transformCurrentPart = (rotation, gameBoard, currentPart, dispatch) => {
  if (!currentPart) {
    return;
  }

  const newPart = {
    ...currentPart,
    shape: transform(currentPart.shape, rotation),
  };

  if (!checkIntersect(gameBoard, newPart)) {
    dispatch({
      type: 'UPDATE_CURRENT_PART',
      payload: newPart,
    });
  }
};

export default transformCurrentPart;
