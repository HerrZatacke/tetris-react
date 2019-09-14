
const transform = (aIn, dir) => {
  const width = aIn.length;
  const height = aIn[0].length;

  return [...new Array(height)].map((x, wOut) => (
    [...new Array(width)].map((y, hOut) => {
      switch (dir) {
        case 'cw':
          return aIn[hOut][height - 1 - wOut];
        case 'ccw':
          return aIn[width - 1 - hOut][wOut];
        case 'flip':
          return aIn[hOut][wOut];
        default:
          return null;
      }
    })
  ));
};

export default transform;
