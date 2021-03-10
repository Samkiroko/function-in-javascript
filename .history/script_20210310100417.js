'use strict';

// const bookings = [];
// const createBooking = function (flightNum, numPassenger = 1, price = 199) {
//   // numPassenger = numPassenger || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/** Higher order functions                 **/

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher - order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Original string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

/**Function return function     **/

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetArr = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Samuel');
// greetArr('hi', 'sam');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`
    );
    this.bboking.push({ flight: `${this.iataCode}` });
  },
};

lufthansa.book(239, 'Samuel kiroko');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
