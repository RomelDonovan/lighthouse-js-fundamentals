const lastIndexOf = function(array, value) {
  let num = [];
  for(let x = array.length - 1; x >= 0; x--) {
    if(array[x] === value || value === undefined) {
      num = x;
      return num;
    }
  }
  return -1;
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);