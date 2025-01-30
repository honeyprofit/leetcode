//222. Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); //Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 9]; //new Array ===[]
console.log(arr.__proto__); //prototype of array
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //[3,6,4,5,9]

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
