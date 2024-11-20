//156. the chain methods.
const eurToUsd = 1.1;
console.log(movements);
console.log(
  movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, cur) => acc + cur)
);
