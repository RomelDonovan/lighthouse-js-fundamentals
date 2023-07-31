const range = function(start,end,step) {
  const num = [];
  if (start === undefined || end === undefined || step === undefined || step <= 0) {
    return num;
  }
  for(let x = start; x <= end; x += step) {
    num.push(x);
  }
  return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));