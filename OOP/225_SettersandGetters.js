//225. Setters and Getters

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Method will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fulltName}`);
  }

  //getter
  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge(); //41

//getter
console.log(jessica.age); //41

console.log(jessica.__proto__ === PersonCl.prototype); //True

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

//1. Classes are NOt hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

const walter = new PersonCl('Waler White', 1965);


const account = {
  owner: 'Jonas',
  movements: [200, 520, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//getter
console.log(account.latest); //300

//setter
account.latest = 50;
console.log(account.movements); //[200, 520, 120, 300, 50]
