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
    If 1 <= s < 1e21 or -1e21 s < -1, return the string
    consisting of the k digits of the decimal representation of s (in order,
    with no leading zeroes), followed by n-k occurrences of the character '0'
es5id: 9.8.1_A6
description: >
    Various integer numbers convert to String by explicit
    transformation
---*/

// CHECK#1
if (String(1) !== "1") {
  throw new Test262Error('#1: String(1) === "1". Actual: ' + (String(1)));
}

// CHECK#2
if (String(10) !== "10") {
  throw new Test262Error('#2: String(10) === "10". Actual: ' + (String(10)));
}

// CHECK#3
if (String(100) !== "100") {
  throw new Test262Error('#3: String(100) === "100". Actual: ' + (String(100)));
}

// CHECK#4
if (String(100000000000000000000) !== "100000000000000000000") {
  throw new Test262Error('#4: String(100000000000000000000) === "100000000000000000000". Actual: ' + (String(100000000000000000000)));
}

// CHECK#5
if (String(1e20) !== "100000000000000000000") {
  throw new Test262Error('#5: String(1e20) === "100000000000000000000". Actual: ' + (String(1e20)));
}

// CHECK#6
if (String(12345) !== "12345") {
  throw new Test262Error('#6: String(12345) === "12345". Actual: ' + (String(12345)));
}

// CHECK#7
if (String(12345000) !== "12345000") {
  throw new Test262Error('#7: String(12345000) === "12345000". Actual: ' + (String(12345000)));
}

// CHECK#8
if (String(-1) !== "-1") {
  throw new Test262Error('#8: String(-1) === "-1". Actual: ' + (String(-1)));
}

// CHECK#9
if (String(-10) !== "-10") {
  throw new Test262Error('#9: String(-10) === "-10". Actual: ' + (String(-10)));
}

// CHECK#10
if (String(-100) !== "-100") {
  throw new Test262Error('#3: String(-100) === "-100". Actual: ' + (String(-100)));
}

// CHECK#10
if (String(-100000000000000000000) !== "-100000000000000000000") {
  throw new Test262Error('#10: String(-100000000000000000000) === "-100000000000000000000". Actual: ' + (String(-100000000000000000000)));
}

// CHECK#11
if (String(-1e20) !== "-100000000000000000000") {
  throw new Test262Error('#11: String(-1e20) === "-100000000000000000000". Actual: ' + (String(-1e20)));
}

// CHECK#12
if (String(-12345) !== "-12345") {
  throw new Test262Error('#12: String(-12345) === "-12345". Actual: ' + (String(-12345)));
}

// CHECK#13
if (String(-12345000) !== "-12345000") {
  throw new Test262Error('#13: String(-12345000) === "-12345000". Actual: ' + (String(-12345000)));
}

// CHECK#14
if (String(1E20) !== "100000000000000000000") {
  throw new Test262Error('#14: String(1E20) === "100000000000000000000". Actual: ' + (String(1E20)));
}

// CHECK#15
if (String(-1E20) !== "-100000000000000000000") {
  throw new Test262Error('#15: String(-1E20) === "-100000000000000000000". Actual: ' + (String(-1E20)));
}

