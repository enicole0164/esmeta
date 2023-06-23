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
es6id: 11.8.3.1
description: Mathematical value of valid octal integer literals
info: |
    The MV of StrNumericLiteral ::: OctalIntegerLiteral is the MV of
    OctalIntegerLiteral.
    The MV of OctalIntegerLiteral :: 0o OctalDigits is the MV of OctalDigits.
    The MV of OctalIntegerLiteral :: 0O OctalDigits is the MV of OctalDigits.
    The MV of OctalDigits :: OctalDigit is the MV of OctalDigit.
    The MV of OctalDigits :: OctalDigits OctalDigit is (the MV of OctalDigits ×
    8) plus the MV of OctalDigit.
---*/

assert.sameValue(0o0, 0, 'lower-case head');
assert.sameValue(0O0, 0, 'upper-case head');
assert.sameValue(0o00, 0, 'lower-case head with leading zeros');
assert.sameValue(0O00, 0, 'upper-case head with leading zeros');

assert.sameValue(0o1, 1, 'lower-case head');
assert.sameValue(0O1, 1, 'upper-case head');
assert.sameValue(0o01, 1, 'lower-case head with leading zeros');
assert.sameValue(0O01, 1, 'upper-case head with leading zeros');

assert.sameValue(0o7, 7, 'lower-case head');
assert.sameValue(0O7, 7, 'upper-case head');
assert.sameValue(0o07, 7, 'lower-case head with leading zeros');
assert.sameValue(0O07, 7, 'upper-case head with leading zeros');

assert.sameValue(0o10, 8, 'lower-case head');
assert.sameValue(0O10, 8, 'upper-case head');
assert.sameValue(0o010, 8, 'lower-case head with leading zeros');
assert.sameValue(0O010, 8, 'upper-case head with leading zeros');

assert.sameValue(0o11, 9, 'lower-case head');
assert.sameValue(0O11, 9, 'upper-case head');
assert.sameValue(0o011, 9, 'lower-case head with leading zeros');
assert.sameValue(0O011, 9, 'upper-case head with leading zeros');

assert.sameValue(0o77, 63, 'lower-case head');
assert.sameValue(0O77, 63, 'upper-case head');
assert.sameValue(0o077, 63, 'lower-case head with leading zeros');
assert.sameValue(0O077, 63, 'upper-case head with leading zeros');

