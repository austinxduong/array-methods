import { every } from './every.js';

describe('every(arr, callback)', () => {
  test('returns true if all values meet criteria', () => {
    const sun = [4, 8, 16, 20];
    const rain = [0, 2, 4, 6];
    const prettyArr = every(sun, (num) => {return num >= 4;});
    const uglyArr = every(rain, (num) => {return num >= 2;});
    expect(prettyArr).toEqual(true);
    expect(uglyArr).toEqual(false); 
  });
});
