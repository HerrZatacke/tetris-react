import { combineReducers } from 'redux';
import clearedLines from './reducers/clearedLinesReducer';
import currentPart from './reducers/currentPartReducer';
import gameBoard from './reducers/gameBoardReducer';
import nextPart from './reducers/nextPartReducer';
import tick from './reducers/tickReducer';

export default combineReducers({
  clearedLines,
  currentPart,
  gameBoard,
  nextPart,
  tick,
});
