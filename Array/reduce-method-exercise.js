console.log(
  accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 1000)
    .reduce((acc, current, index, array) => (current > 1000 ? acc + 1 : acc), 0)
);

const { deposits, withdrawals } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits);
console.log(withdrawals);

//this is a nice title-> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(
  convertTitleCase('and this is a LONG AND nice title with an EXAMPLE')
);
