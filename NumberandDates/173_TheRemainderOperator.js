//173. The Remainder Operator
console.log(5 % 2); //1
console.log(5 / 2); //2.5

console.log(8 % 3); //2
console.log(8 / 3); //2.6666

console.log(6 % 2); //0
console.log(7 % 2); //1
console.log(6 / 2); //3

const isEven = n => n % 2 === 0;
console.log(isEven(3));
console.log(isEven(6));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
