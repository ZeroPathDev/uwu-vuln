// Uses lodash to make the dependency reachable from application code.
const _ = require('lodash');

function mergeUserInput(base, userSupplied) {
  // prototype-pollution sink via lodash.merge on attacker-controlled input
  return _.merge(base, userSupplied);
}

module.exports = { mergeUserInput };
