// export default map(arr, callback) {
//     for ()
// }


export function map(array, callback) {

  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
      
  }
  return newArray;

}


