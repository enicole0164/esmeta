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

// Copyright (C) 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-signed-right-shift-operator-runtime-semantics-evaluation
description: Mixing BigInt and Number produces a TypeError for right-shift operator
features: [BigInt]
info: |
  Let lnum be ? ToNumeric(leftValue).
  Let rnum be ? ToNumeric(rightValue).
  If Type(lnum) does not equal Type(rnum), throw a TypeError exception.
---*/
assert.throws(TypeError, function() {
  1n >> 1;
}, '1n >> 1 throws TypeError');

assert.throws(TypeError, function() {
  1 >> 1n;
}, '1 >> 1n throws TypeError');

assert.throws(TypeError, function() {
  Object(1n) >> 1;
}, 'Object(1n) >> 1 throws TypeError');

assert.throws(TypeError, function() {
  1 >> Object(1n);
}, '1 >> Object(1n) throws TypeError');

assert.throws(TypeError, function() {
  1n >> Object(1);
}, '1n >> Object(1) throws TypeError');

assert.throws(TypeError, function() {
  Object(1) >> 1n;
}, 'Object(1) >> 1n throws TypeError');

assert.throws(TypeError, function() {
  Object(1n) >> Object(1);
}, 'Object(1n) >> Object(1) throws TypeError');

assert.throws(TypeError, function() {
  Object(1) >> Object(1n);
}, 'Object(1) >> Object(1n) throws TypeError');

assert.throws(TypeError, function() {
  1n >> NaN;
}, '1n >> NaN throws TypeError');

assert.throws(TypeError, function() {
  NaN >> 1n;
}, 'NaN >> 1n throws TypeError');

assert.throws(TypeError, function() {
  1n >> Infinity;
}, '1n >> Infinity throws TypeError');

assert.throws(TypeError, function() {
  Infinity >> 1n;
}, 'Infinity >> 1n throws TypeError');

assert.throws(TypeError, function() {
  1n >> true;
}, '1n >> true throws TypeError');

assert.throws(TypeError, function() {
  true >> 1n;
}, 'true >> 1n throws TypeError');

assert.throws(TypeError, function() {
  1n >> '1';
}, '1n >> "1" throws TypeError');

assert.throws(TypeError, function() {
  '1' >> 1n;
}, '"1" >> 1n throws TypeError');

assert.throws(TypeError, function() {
  1n >> null;
}, '1n >> null throws TypeError');

assert.throws(TypeError, function() {
  null >> 1n;
}, 'null >> 1n throws TypeError');

assert.throws(TypeError, function() {
  1n >> undefined;
}, '1n >> undefined throws TypeError');

assert.throws(TypeError, function() {
  undefined >> 1n;
}, 'undefined >> 1n throws TypeError');

