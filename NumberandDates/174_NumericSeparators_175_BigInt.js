//174. Numeric Separators
//28,746,000,000
const diameter = 28_746_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;

console.log(Number('230000')); //230000
console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230

//175. Working with BigInt
console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 - 0); //incorrect
console.log(2 ** 53 + 1); //incorrect
console.log(2 ** 53 + 2); //incorrect

console.log(2346712478569126081209682198719); //2.3467124785691262e+30
console.log(BigInt(2346712478569126081209682198719)); //2346712478569126188945581801472n

//Operations
console.log(10000n + 10000n); //20000n
// console.log(10000n + 10000); //Cannot mix BigInt and other types
console.log(10000n + BigInt(10000)); //20000n

console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(20n == 20); //true : loose equality
console.log(20n == '20'); //true : loose equality
console.log(typeof 20n); //bigint

const huge = 12352634735147347n;
console.log(huge + 'is big'); //12352634735147347is big

//Division
console.log(10n / 3n); //3n
console.log(10 / 3); //3.3333333
console.log(12n / 3n); //4n
