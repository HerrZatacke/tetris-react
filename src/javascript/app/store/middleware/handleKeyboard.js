const getHandleKey = dispatch => (key) => {
  let transformCurrentPart = false;
  let shiftCurrentPart = false;

  switch (key) {
    case 'a':
      transformCurrentPart = 'ccw';
      break;
    case 'd':
      transformCurrentPart = 'cw';
      break;
    case 'ArrowLeft':
      shiftCurrentPart = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      shiftCurrentPart = { x: 1, y: 0 };
      break;
    case 'ArrowDown':
      shiftCurrentPart = { x: 0, y: 1 };
      break;
    default:
    // console.log(key);
  }

  if (transformCurrentPart) {
    dispatch({
      type: 'TRANSFORM_CURRENT_PART',
      payload: transformCurrentPart,
    });
  }

  if (shiftCurrentPart) {
    dispatch({
      type: 'SHIFT_CURRENT_PART',
      payload: shiftCurrentPart,
    });
  }
};

const handleKeyboard = (dispatch, initialDelay = 90, repeatDelay = 45) => {
  const pressedKeys = {};
  const handleKey = getHandleKey(dispatch);

  window.addEventListener('keydown', ({ key }) => {
    if (pressedKeys[key]) {
      return;
    }

    handleKey(key);
    pressedKeys[key] = true;

    window.setTimeout(() => {
      if (pressedKeys[key]) {
        pressedKeys[key] = window.setInterval(() => {
          handleKey(key);
        }, repeatDelay);
      }
    }, initialDelay);
  });

  window.addEventListener('keyup', ({ key }) => {
    window.clearInterval(pressedKeys[key]);
    delete pressedKeys[key];
  });
};

export default handleKeyboard;
