import { map } from './map-array.js';


describe('array methods', () => {
  it('takes an array and callback of signature and creates new array with return value of each called callback', () => {
    const array = [1, 2, 3];
    const actual = map(array, (num) => num + 1);
    expect (actual).toEqual([2, 3, 4]);


    // const newArray = 
    // expect(newArray).
    // expect(numbers). toEqual([1, 2, 3]);
  });
}); 




