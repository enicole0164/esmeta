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

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: BigInt.asUintN type coercion for bits parameter
esid: pending
info: |
  BigInt.asUintN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
features: [BigInt, computed-property-names, Symbol, Symbol.toPrimitive]
---*/
assert.sameValue(typeof BigInt, 'function');
assert.sameValue(typeof BigInt.asUintN, 'function');

assert.throws(RangeError, function() {
  BigInt.asUintN(-1, 0n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN(-2.5, 0n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN("-2.5", 0n);
}, "ToIndex: parse Number => throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN(-Infinity, 0n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN(9007199254740992, 0n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert.throws(RangeError, function() {
  BigInt.asUintN(Infinity, 0n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert.throws(TypeError, function() {
  BigInt.asUintN(0n, 0n);
}, "ToIndex: BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN(Object(0n), 0n);
}, "ToIndex: unbox object with internal slot => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    [Symbol.toPrimitive]: function() {
      return 0n;
    }
  }, 0n);
}, "ToIndex: @@toPrimitive => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    valueOf: function() {
      return 0n;
    }
  }, 0n);
}, "ToIndex: valueOf => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    toString: function() {
      return 0n;
    }
  }, 0n);
}, "ToIndex: toString => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN(Symbol("1"), 0n);
}, "ToIndex: Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN(Object(Symbol("1")), 0n);
}, "ToIndex: unbox object with internal slot => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    [Symbol.toPrimitive]: function() {
      return Symbol("1");
    }
  }, 0n);
}, "ToIndex: @@toPrimitive => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    valueOf: function() {
      return Symbol("1");
    }
  }, 0n);
}, "ToIndex: valueOf => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    toString: function() {
      return Symbol("1");
    }
  }, 0n);
}, "ToIndex: toString => Symbol => TypeError");

