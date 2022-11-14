import { prepareValue, prepareString } from 'utils/prepareValues';

describe.each([
  [[], 0],
  [['a', 'b'], 2],
  ['100,20', 10020],
  ['100-200', 100],
  ['unkown', NaN],
  ['', NaN]
])('prepareValues() value = %s', (input, returnedValue) => {
  test(`should return ${returnedValue}`, () => {
    expect(prepareValue(input)).toBe(returnedValue);
  });
});

describe.each([
  [[], '0'],
  [['a', 'b'], '2'],
  ['100,20', '10020'],
  ['100-200', '100'],
  ['unkown', 'unkown'],
  ['', '']
])('prepareString() value = %s', (input, returnedValue) => {
  test(`should return ${returnedValue}`, () => {
    expect(prepareString(input)).toBe(returnedValue);
  });
});
