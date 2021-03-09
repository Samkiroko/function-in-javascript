'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 199) {
  // numPassenger = numPassenger || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
