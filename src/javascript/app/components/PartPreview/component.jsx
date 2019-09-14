import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import transform from '../../tools/transform';

const PartPreview = ({ nextPart }) => {

  if (!nextPart) {
    return null;
  }

  return (
    <table className="part-preview">
      <tbody>
        {
          transform(nextPart.shape, 'flip').map((row, rowIndex) => (
            <tr
              key={`row_${rowIndex}`}
            >
              {
                row.map((cell, colIndex) => (
                  <td
                    key={`cell_${rowIndex}_${colIndex}`}
                    className={classNames('part-preview__cell', {
                      [`part-preview__cell--${cell}`]: cell,
                      'part-preview__cell--fixed': cell,
                    })}
                  />
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

PartPreview.propTypes = {
  nextPart: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    shape: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  }),
};

PartPreview.defaultProps = {
  nextPart: null,
};

export default PartPreview;
