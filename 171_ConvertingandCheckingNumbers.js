//171. Converting and Checking Numbers
console.log(23 === 23.0);

//Base 10 - 0 to 9
//Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Conversion: String to number
console.log(Number('23'));
console.log(+'23');

//Parsing : Extract number from string beginning with number
console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem', 10));
console.log(Number.parseFloat('2.5rem', 10));

//Not-A-Number : Number.isNaN
console.log(Number.isNaN(20)); //false

console.log(isNaN('hello')); //ture
console.log(Number.isNaN('hello')); //false

//Number.isNaN(): 인자로 들어온 값을 숫자로 변환하지 않고 검사
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(+parseInt('23X'));
console.log(Number.isNaN(23 / 0)); //false

//Checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(23 / 0)); //false
console.log(typeof (23 / 0)); //number

//Integer
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23 / 0)); //false
