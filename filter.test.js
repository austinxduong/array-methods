import  filter  from './filter.js';

// describe('array methods', () => {
//   it('takes an array and callback of signature and creates new array with all items whose callback returned true or a truthy value', () => {
//     const array = [1, 2, 3];
      
//     const parameters = (item) => {
//       return item[0] === 1;
//     };
//     const newArray = filter(array, parameters);
//     expect (newArray).toEqual([1]);
//   });
// });

describe('filter', () => {
  it('filters the array', () => {
    const array = ['cookie', 'deer', 5, 'austi', true, undefined, 'clay'];
  
    const parameters = (item) => {
      return item[0] === 'c';
    };
  
    const newArray = filter(array, parameters);
  
    expect(newArray).toEqual(['cookie', 'clay']);
  });
});
