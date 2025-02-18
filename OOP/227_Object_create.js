//227. Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(PersonProto);
console.log(steven.__proto__);
console.log(steven.__proto__ == PersonProto); //True

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
