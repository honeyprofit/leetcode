//154. the reduce method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const balance = movements.reduce(function (accumulator, current, index, array) {
  console.log(`Iteation[${index}]: ` + accumulator);
  return accumulator + current;
}, 0);
console.log('Final balance is ' + balance);

//for
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//arrow
const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance3);

//maximum value
const maximumValue = movements.reduce(function (prevision, current) {
  if (prevision > current) {
    return prevision;
  } else {
    return current;
  }
}, movements[0]);
console.log(maximumValue);
