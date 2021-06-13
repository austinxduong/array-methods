import reduce from './reduce.js';

test('Takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.', () => {

  const array = ['pizza', 'pie', 2, 'plate', undefined, true, 'lion'];
  const parameters = (item) => {
    return item.charAt(0) === 'p';
  };

  const actual = reduce(array, parameters);
  expect(actual).toEqual(0);

});
