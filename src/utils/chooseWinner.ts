// CHOOSE WINNER FUNCTION (COMPARE NUMBER VALUES AND TRIGGER UPDATES ON CONTEXT)

export type TWinner = 'left' | 'right' | 'draw';

export const chooseWinner = (left: number, right: number, leftWin: () => void, rightWin: () => void): TWinner => {
  if (left > right) {
    leftWin();
    return 'left';
  } else if (left < right) {
    rightWin();
    return 'right';
  }
  return 'draw';
};
