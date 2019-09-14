import React from 'react';
import PropTypes from 'prop-types';
import GameBoard from '../GameBoard';
import PartPreview from '../PartPreview';

const App = ({
  startGame,
  isRunning,
  clearedLines,
}) => (
  <div
    className="tetris-react"
  >
    <GameBoard />
    <PartPreview />
    <button
      type="button"
      className="start-button"
      onClick={() => startGame()}
      disabled={isRunning}
    >
      Start
    </button>
    <div>
      {`${clearedLines} lines cleared`}
    </div>
  </div>
);

App.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  clearedLines: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
};


export default App;
