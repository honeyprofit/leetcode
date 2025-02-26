//////////////////////////
//234. Encapsulation: Private Class Fields and Methods

// 1) Public fields(instances: not inherited)
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  // 1) Public fields(instances: not inherited)
  locale = navigator.language; //en-US
  bank = 'Bankist';

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.local = navigator.language; //en-US
    console.log(`Thanks for opening the account, ${owner}`);
  }

  // 3) Public methods
  //Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  // 4) Private methods
  #approveLoan(val) {
    //Fake method
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  // STATIC version of these 4
  static test() {
    console.log('TEST');
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(300);
acc1.withdraw(100);
// acc1.#movements = []; //unable to access - encapsulated
console.log(acc1);

Account.test();
