import shapes from './shapes';

const createPart = () => {
  const shape = Math.floor(Math.random() * shapes.length);
  return (
    {
      x: (shapes[shape].length >= 3) ? 3 : 4,
      y: -1,
      shape: shapes[shape],
    }
  );
};

export default createPart;
