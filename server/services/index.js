'use strict';

const myService = require('./my-service');
const integerCounter = require('./integer-counter');
const bigintegerCounter = require('./biginteger-counter');

module.exports = {
  myService,
  'integer-counter': integerCounter,
  'biginteger-counter': bigintegerCounter
};
