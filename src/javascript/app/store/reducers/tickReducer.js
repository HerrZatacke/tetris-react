const tickReducer = (tick = null, action) => {
  switch (action.type) {
    case 'UPDATE_GAME_TICK':
      return action.payload;
    case 'START_GAME':
    default:
      return tick;
  }
};

export default tickReducer;
