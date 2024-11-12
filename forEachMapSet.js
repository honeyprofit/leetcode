const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} - ${map}`);
});

//set
const currenciesUnique = new Set(['USD', 'GBP', 'KRW', 'JPY', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value} - ${map}`);
});
