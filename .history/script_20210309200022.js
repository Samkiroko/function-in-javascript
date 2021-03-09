'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassenger, price) {
  numPassengers = numPassenger || 1;
  price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
