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

// Copyright (C) 2020 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.split
description: Separator is undefined, limit is a positive number, return a new array with the string 
info: |
  ...
  3. Let S be ? ToString(O).
  4. Let A be ! ArrayCreate(0).
  ...
  6. If limit is undefined, let lim be 232 - 1; else let lim be ? ToUint32(limit).
  7. Let R be ? ToString(separator).
  8. If lim = 0, return A.
  9. If separator is undefined, then
    a. Perform ! CreateDataPropertyOrThrow(A, "0", S).
    b. Return A.
---*/

var str = 'undefined is not a function';

var result = str.split(undefined, 1);

assert.sameValue(Array.isArray(result), true, '1, result is array');
assert.sameValue(result.length, 1, '1, result.length');
assert.sameValue(result[0], str, '1, [0] is the same string');

result = str.split(undefined, 2);

assert.sameValue(Array.isArray(result), true, '2, result is array');
assert.sameValue(result.length, 1, '2, result.length');
assert.sameValue(result[0], str, '2, [0] is the same string');

result = str.split(undefined, undefined);

assert.sameValue(Array.isArray(result), true, 'undefined, result is array');
assert.sameValue(result.length, 1, 'undefined, result.length');
assert.sameValue(result[0], str, 'undefined, [0] is the same string');

result = str.split(undefined, true);

assert.sameValue(Array.isArray(result), true, 'boolean, result is array');
assert.sameValue(result.length, 1, 'boolean, result.length');
assert.sameValue(result[0], str, 'boolean, [0] is the same string');

result = str.split(undefined, 2 ** 32 + 1);

assert.sameValue(Array.isArray(result), true, 'ToUint32 2 ** 32 + 1, result is array');
assert.sameValue(result.length, 1, 'ToUint32 2 ** 32 + 1, result.length');
assert.sameValue(result[0], str, 'ToUint32 2 ** 32 + 1, [0] is the same string');

result = str.split(undefined, 2 ** 31);

assert.sameValue(Array.isArray(result), true, 'ToUint32 2 ** 31, result is array');
assert.sameValue(result.length, 1, 'ToUint32 2 ** 31, result.length');
assert.sameValue(result[0], str, 'ToUint32 2 ** 31, [0] is the same string');

result = str.split(undefined, 2 ** 16);

assert.sameValue(Array.isArray(result), true, 'ToUint32 2 ** 16, result is array');
assert.sameValue(result.length, 1, 'ToUint32 2 ** 16, result.length');
assert.sameValue(result[0], str, 'ToUint32 2 ** 16, [0] is the same string');

result = str.split(undefined, {valueOf() { return 1; }});

assert.sameValue(Array.isArray(result), true, 'boolean, result is array');
assert.sameValue(result.length, 1, 'boolean, result.length');
assert.sameValue(result[0], str, 'boolean, [0] is the same string');

