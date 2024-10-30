const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 237234869,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 237234869) {
    alert('check in');
  } else {
    alert('wrong passport!');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
