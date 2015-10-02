/* global module */

var clc = require('cli-color');

module.exports = function(console) {
  console.debug = function() {
    Array.prototype.unshift.call(arguments, clc.red('HELLO WORLD BY JEGSAR!'));
    console.log.apply(this, arguments);
  };
};
