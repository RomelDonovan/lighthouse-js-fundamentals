const isEven = function(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven); //true
console.log(elevenIsEven); //false