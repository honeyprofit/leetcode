//143. at() method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(arr.length - 1));
console.log(arr.at(-1));
console.log(arr.at(-2));

//144. Loop Arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for
for (const movement of movements) {
  if (movement > 0) {
    console.log(`0.your deposit: ${movement}`);
  } else {
    console.log(`0.Your withdrew ${Math.abs(movement)}`);
  }
}

//for
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`1.Movement ${i + 1} your deposit: ${movement}`);
  } else {
    console.log(`1.Movement ${i + 1} Your withdrew ${Math.abs(movement)}`);
  }
}

//forEach - element, index, array
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`2.Movement ${i + 1} your deposit: ${movement}`);
  } else {
    console.log(`2.Movement ${i + 1} Your withdrew ${Math.abs(movement)}`);
  }
});

//map
movements.map(movement => {
  if (movement > 0) {
    console.log(`3.your deposit: ${movement}`);
  } else {
    console.log(`3.Your withdrew ${Math.abs(movement)}`);
  }
});
