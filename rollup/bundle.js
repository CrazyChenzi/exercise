'use strict';

// blacklisten

require('lodash');

var version = "1.0.0";

var index = 42;

// src/main.js

var main$1 = () => {
  console.log('version ' + version);
  console.log(`the answer is ${index}`);
};

module.exports = main$1;
