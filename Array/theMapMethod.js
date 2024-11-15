const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const enroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * enroToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * enroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} Your ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
