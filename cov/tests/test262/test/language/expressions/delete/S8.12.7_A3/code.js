"use strict";
// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of assertion functions used throughout test262
defines: [assert]
---*/


function assert(mustBeTrue, message) {
  if (mustBeTrue === true) {
    return;
  }

  if (message === undefined) {
    message = 'Expected true but got ' + assert._toString(mustBeTrue);
  }
  throw new Test262Error(message);
}

assert._isSameValue = function (a, b) {
  if (a === b) {
    // Handle +/-0 vs. -/+0
    return a !== 0 || 1 / a === 1 / b;
  }

  // Handle NaN vs. NaN
  return a !== a && b !== b;
};

assert.sameValue = function (actual, expected, message) {
  try {
    if (assert._isSameValue(actual, expected)) {
      return;
    }
  } catch (error) {
    throw new Test262Error(message + ' (_isSameValue operation threw) ' + error);
    return;
  }

  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  message += 'Expected SameValue(«' + assert._toString(actual) + '», «' + assert._toString(expected) + '») to be true';

  throw new Test262Error(message);
};

assert.notSameValue = function (actual, unexpected, message) {
  if (!assert._isSameValue(actual, unexpected)) {
    return;
  }

  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  message += 'Expected SameValue(«' + assert._toString(actual) + '», «' + assert._toString(unexpected) + '») to be false';

  throw new Test262Error(message);
};

assert.throws = function (expectedErrorConstructor, func, message) {
  var expectedName, actualName;
  if (typeof func !== "function") {
    throw new Test262Error('assert.throws requires two arguments: the error constructor ' +
      'and a function to run');
    return;
  }
  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  try {
    func();
  } catch (thrown) {
    if (typeof thrown !== 'object' || thrown === null) {
      message += 'Thrown value was not an object!';
      throw new Test262Error(message);
    } else if (thrown.constructor !== expectedErrorConstructor) {
      expectedName = expectedErrorConstructor.name;
      actualName = thrown.constructor.name;
      if (expectedName === actualName) {
        message += 'Expected a ' + expectedName + ' but got a different error constructor with the same name';
      } else {
        message += 'Expected a ' + expectedName + ' but got a ' + actualName;
      }
      throw new Test262Error(message);
    }
    return;
  }

  message += 'Expected a ' + expectedErrorConstructor.name + ' to be thrown but no exception was thrown at all';
  throw new Test262Error(message);
};

assert._toString = function (value) {
  try {
    if (value === 0 && 1 / value === -Infinity) {
      return '-0';
    }

    return String(value);
  } catch (err) {
    if (err.name === 'TypeError') {
      return Object.prototype.toString.call(value);
    }

    throw err;
  }
};

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Provides both:

    - An error class to avoid false positives when testing for thrown exceptions
    - A function to explicitly throw an exception using the Test262Error class
defines: [Test262Error, $DONOTEVALUATE]
---*/


function Test262Error(message) {
  this.message = message || "";
}

Test262Error.prototype.toString = function () {
  return "Test262Error: " + this.message;
};

Test262Error.thrower = (message) => {
  throw new Test262Error(message);
};

function $DONOTEVALUATE() {
  throw "Test262: This statement should not be evaluated.";
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the [[Delete]] method of O is called with property name P,
    removes the property with name P from O and return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Delete existent properties
---*/

var BLUE_NUM = 1;
var BLUE_STR = '1';
var YELLOW_NUM = 2;
var YELLOW_STR = '2';
var __color__map = {
  red: 0xff0000,
  BLUE_NUM: 0x0000ff,
  green: 0x00ff00,
  YELLOW_STR: 0xffff00,
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete __color__map[YELLOW_NUM] !== true) {
  throw new Test262Error(
    '#1: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[YELLOW_NUM] === true;'
  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__color__map[YELLOW_STR] !== undefined) {
  throw new Test262Error(
    '#2: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[YELLOW_NUM]; __color__map[YELLOW_STR] === undefined. Actual: ' +
    __color__map[YELLOW_STR]
  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (delete __color__map[BLUE_STR] !== true) {
  throw new Test262Error(
    '#3: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[BLUE_STR] === true. Actual: ' +
    delete __color__map[BLUE_STR]
  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__color__map[BLUE_NUM] !== undefined) {
  throw new Test262Error(
    '#4: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[BLUE_STR]; __color__map[BLUE_NUM] === undefined. Actual: ' +
    __color__map[BLUE_NUM]
  );
}
//
//////////////////////////////////////////////////////////////////////////////

