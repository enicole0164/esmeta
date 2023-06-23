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

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Mathematical value of valid binary integer literals
info: |
    20.1.1.1 Number ( [ value ] )

    When Number is called with argument number, the following steps are taken:

    1. If no arguments were passed to this function invocation, let n be +0.
    2. Else, let n be ToNumber(value).

    [...]

    7.1.3.1 ToNumber Applied to the String Type

    All grammar symbols not explicitly defined above have the definitions used
    in the Lexical Grammar for numeric literals (11.8.3)

    [...]

    The MV of BinaryIntegerLiteral :: 0b BinaryDigits is the MV of
    BinaryDigits.
    The MV of BinaryIntegerLiteral :: 0B BinaryDigits is the MV of
    BinaryDigits.
    The MV of BinaryDigits :: BinaryDigit is the MV of BinaryDigit.
    The MV of BinaryDigits :: BinaryDigits BinaryDigit is (the MV of
    BinaryDigits × 2) plus the MV of BinaryDigit.
---*/

assert.sameValue(Number('0b0'), 0, 'lower-case head');
assert.sameValue(Number('0B0'), 0, 'upper-case head');
assert.sameValue(Number('0b00'), 0, 'lower-case head with leading zeros');
assert.sameValue(Number('0B00'), 0, 'upper-case head with leading zeros');

assert.sameValue(Number('0b1'), 1, 'lower-case head');
assert.sameValue(Number('0B1'), 1, 'upper-case head');
assert.sameValue(Number('0b01'), 1, 'lower-case head with leading zeros');
assert.sameValue(Number('0B01'), 1, 'upper-case head with leading zeros');

assert.sameValue(Number('0b10'), 2, 'lower-case head');
assert.sameValue(Number('0B10'), 2, 'upper-case head');
assert.sameValue(Number('0b010'), 2, 'lower-case head with leading zeros');
assert.sameValue(Number('0B010'), 2, 'upper-case head with leading zeros');

assert.sameValue(Number('0b11'), 3, 'lower-case head');
assert.sameValue(Number('0B11'), 3, 'upper-case head');
assert.sameValue(Number('0b011'), 3, 'lower-case head with leading zeros');
assert.sameValue(Number('0B011'), 3, 'upper-case head with leading zeros');

