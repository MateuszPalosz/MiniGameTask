import { chooseWinner } from 'utils/chooseWinner';

const mock = jest.fn();

describe.each([
  [10, 20, 'right'],
  [20, 10, 'left'],
  [10, 10, 'draw'],
  [10, NaN, 'draw'],
  [NaN, 10, 'draw'],
  [NaN, NaN, 'draw']
])('chooseWinner() between left = %s, right = %s', (left, right, returnedValue) => {
  test(`should return ${returnedValue}`, () => {
    expect(chooseWinner(left, right, mock, mock)).toBe(returnedValue);
  });
});
