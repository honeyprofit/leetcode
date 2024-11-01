//134.The call and apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name: name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.booking);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

//Call method
book.call(eurowings, 2323, 'Sara Williams');
book.call(eurowings, 7878, 'Mary Poppins');
console.log(eurowings.booking);

book.call(lufthansa, 9090, 'Younghyun Kim');
console.log(lufthansa.booking);

//Apply method
const flightData = [6789, 'YH KIM'];
book.apply(eurowings, flightData);
console.log(eurowings.booking);

book.call(lufthansa, ...flightData);
console.log(lufthansa.booking);
