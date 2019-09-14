import createPart from '../../tools/createPart';

const nextPartReducer = (nextPart = null, action) => {
  switch (action.type) {
    case 'START_GAME':
    case 'NEXT_PART':
      return createPart();
    default:
      return nextPart;
  }
};

export default nextPartReducer;
