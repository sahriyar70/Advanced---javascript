
let numbers = [1,2,3,4,5,6,7,8,9,0];

const part = numbers.slice(4,7);
const removedpart = numbers.splice(1,3);

const join = numbers.join("")
console.log(join)
console.log(removedpart)

console.log(part)
console.log(numbers)