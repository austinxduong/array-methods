export default function reduce(array, callback) {


  for(let i = 0; i < array.length; i++) {
    if((array[i] !== undefined) && callback(array[i])) return i;
  
  }
  return -1;
}
