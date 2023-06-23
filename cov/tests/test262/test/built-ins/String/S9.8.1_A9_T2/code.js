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
    Return the string consisting of the single digit of s,
    followed by lowercase character 'e', followed by a plus sign '+' or minus
    sign '-' according to whether n-1 is positive or negative, followed by the
    decimal representation of the integer abs(n-1) (with no leading zeros)
es5id: 9.8.1_A9_T2
description: >
    Various float numbers with many zeros convert to String by
    explicit transformation
---*/

// CHECK#1
if (String(0.0000001) !== "1e-7") {
  throw new Test262Error('#1: String(0.0000001) === "1e-7". Actual: ' + (String(0.0000001)));
}

// CHECK#2
if (String(0.000000000100000000000) !== "1e-10") {
  throw new Test262Error('#2: String(0.000000000100000000000) === "1e-10". Actual: ' + (String(0.000000000100000000000)));
}

// CHECK#3
if (String(1e-7) !== "1e-7") {
  throw new Test262Error('#3: String(1e-7) === "1e-7". Actual: ' + (String(1e-7)));
}

// CHECK#4
if (String(1.0e-10) !== "1e-10") {
  throw new Test262Error('#4: String(1.0e-10) === "1e-10". Actual: ' + (String(1.0e-10)));
}

// CHECK#5
if (String(1E-7) !== "1e-7") {
  throw new Test262Error('#5: String(1E-7) === "1e-7". Actual: ' + (String(1E-7)));
}

// CHECK#6
if (String(1.0E-10) !== "1e-10") {
  throw new Test262Error('#6: String(1.0E-10) === "1e-10". Actual: ' + (String(1.0E-10)));
}

// CHECK#7
if (String(-0.0000001) !== "-1e-7") {
  throw new Test262Error('#7: String(-0.0000001) === "1e-7". Actual: ' + (String(-0.0000001)));
}

// CHECK#8
if (String(-0.000000000100000000000) !== "-1e-10") {
  throw new Test262Error('#8: String(-0.000000000100000000000) === "1e-10". Actual: ' + (String(-0.000000000100000000000)));
}

// CHECK#9
if (String(-1e-7) !== "-1e-7") {
  throw new Test262Error('#9: String(-1e-7) === "-1e-7". Actual: ' + (String(-1e-7)));
}

// CHECK#10
if (String(-1.0e-10) !== "-1e-10") {
  throw new Test262Error('#10: String(-1.0e-10) === "-1e-10". Actual: ' + (String(-1.0e-10)));
}

// CHECK#11
if (String(-1E-7) !== "-1e-7") {
  throw new Test262Error('#11: String(-1E-7) === "-1e-7". Actual: ' + (String(-1E-7)));
}

// CHECK#12
if (String(-1.0E-10) !== "-1e-10") {
  throw new Test262Error('#12: String(-1.0E-10) === "-1e-10". Actual: ' + (String(-1.0E-10)));
}

