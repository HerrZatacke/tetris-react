import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';

const GameBoard = ({ gameBoard, currentPart }) => (
  <table className="game-board">
    <tbody>
      {
        gameBoard.map((row, rowIndex) => (
          <tr
            key={`row_${rowIndex}`}
          >
            {
              row.map((cell, colIndex) => {

                const part = (
                  currentPart &&
                  currentPart.shape[colIndex - currentPart.x] &&
                  currentPart.shape[colIndex - currentPart.x][rowIndex - currentPart.y]
                );

                const cellStyle = cell || part;

                return (
                  <td
                    key={`cell_${rowIndex}_${colIndex}`}
                    className={classNames('game-board__cell', {
                      [`game-board__cell--${cellStyle}`]: cellStyle,
                      'game-board__cell--fixed': cell,
                      'game-board__cell--moving': part,
                    })}
                  />
                );
              })
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

GameBoard.propTypes = {
  gameBoard: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  currentPart: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    shape: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  }),
};

GameBoard.defaultProps = {
  currentPart: null,
};

export default GameBoard;
