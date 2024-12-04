//172. Math and Rounding
//root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

//max
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

//min
console.log(Math.min(5, 18, 23, 11, 2));

//
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//1~6사이 랜덤값
console.log(Math.trunc(Math.random() * 6) + 1);

//min ... max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(-10, 29));

//Rounding integers

//버림
console.log(Math.trunc(23.3)); //23
console.log(Math.trunc(23.9)); //23
console.log(Math.trunc(-23.9)); //-23
//내림
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23
console.log(Math.floor(-23.9)); //-24

//반올림
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24
//올림
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

//Rounding decimals
console.log((2.7).toFixed(0)); //3 : string
console.log((2.7).toFixed(3)); //2.700 : string
console.log((2.345).toFixed(2)); //2.35 : string
console.log(+(2.345).toFixed(2)); //2.35 : number
