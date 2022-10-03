'use strict';

const integerCounters = require('./integer-counters');
const bigintegerCounters = require('./biginteger-counters');

module.exports = {
  'integer-counter': integerCounters,
  'biginteger-counter': bigintegerCounters,
};