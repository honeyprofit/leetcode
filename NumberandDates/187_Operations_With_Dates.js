//187_Operations_With_Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

console.log(
  calcDaysPassed(new Date(2034, 3, 14, 10, 10), new Date(2034, 3, 24))
);
