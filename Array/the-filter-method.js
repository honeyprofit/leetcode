//153. the filter method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depoositFor = [];
for (const mov of movements) {
  if (mov > 0) depoositFor.push(mov);
}
console.log(depoositFor);

//withdrawal
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
