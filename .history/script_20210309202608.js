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

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 243442424,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger = 'Mr. ' + passenger.name;

  if (passenger.passport === 243442424) {
    alert('Checked in');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
