const currentPartReducer = (currentPart = null, action) => {
  switch (action.type) {
    case 'UPDATE_GAME_BOARD':
    case 'START_GAME':
      return null;
    case 'UPDATE_CURRENT_PART':
      return action.payload;
    default:
      return currentPart;
  }
};

export default currentPartReducer;
