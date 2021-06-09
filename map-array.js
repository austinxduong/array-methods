// export default map(arr, callback) {
//     for ()
// }


export function callback(array, callback) {

  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
      
  }
  return newArray;

}


