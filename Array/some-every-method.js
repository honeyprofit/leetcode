//162. some and every Method
console.log(movements);

//equality
console.log(movements.includes(-130)); //true

//some condition
console.log(movements.some(mov => mov === -130)); //true
console.log(movements.some(mov => mov > 0)); //true

//every condition
console.log(movements.every(mov => mov > 0)); //false
console.log(account4.movements.every(mov => mov > 0)); //true

//seperate callback
const deposit = mov => mov > 0;

console.log(deposit);
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
