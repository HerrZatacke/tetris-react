import getLevel from './getLevel';

const getTickInterval = (clearedLines) => {
  switch (getLevel(clearedLines)) {
    case 0:
      return 625;
    case 1:
      return 560;
    case 2:
      return 500;
    case 3:
      return 430;
    case 4:
      return 365;
    case 5:
      return 300;
    case 6:
      return 235;
    case 7:
      return 170;
    case 8:
      return 105;
    case 9:
      return 80;
    case 10:
      return 70;
    case 11:
      return 65;
    case 12:
      return 55;
    default:
      return 45;
  }
};

export default getTickInterval;
