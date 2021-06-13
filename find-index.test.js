import  findIndex  from './find-index.js';


// describe('return the index of the found item', () => {
//   it('returns the index of the found item, -1 if no item is found', () => {
//     const array = ['cookie', 'pizza', 'sun', 'rock', 'grass'];

//     const actual = 
//     expect (actual).toEqual(-1);


//     // const newArray = 
//     // expect(newArray).
//     // expect(numbers). toEqual([1, 2, 3]);
//   });
// }); 


describe('findIndex(arr, callback)', () => {
  test('returns index of array based on true callback', () => {
    const sample = [0, 1, 2, 3];
     
    const newArr = findIndex(sample, (num) => {return num === 2;});
    expect(newArr).toEqual(2); 
  });
    
});

