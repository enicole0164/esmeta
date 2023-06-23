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
description: String.prototype.indexOf type coercion for position parameter
esid: sec-string.prototype.indexof
info: |
  String.prototype.indexOf ( searchString [ , position ] )

  4. Let pos be ? ToInteger(position).
features: [Symbol.toPrimitive, computed-property-names]
---*/

assert.sameValue("aaaa".indexOf("aa", Object(0)), 0, "ToPrimitive: unbox object with internal slot");
assert.sameValue("aaaa".indexOf("aa", {
  [Symbol.toPrimitive]: function() {
    return 0;
  }
}), 0, "ToPrimitive: @@toPrimitive");
assert.sameValue("aaaa".indexOf("aa", {
  valueOf: function() {
    return 0;
  }
}), 0, "ToPrimitive: valueOf");
assert.sameValue("aaaa".indexOf("aa", {
  toString: function() {
    return 0;
  }
}), 0, "ToPrimitive: toString");
assert.sameValue("aaaa".indexOf("aa", Object(NaN)), 0,
  "ToInteger: unbox object with internal slot => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  [Symbol.toPrimitive]: function() {
    return NaN;
  }
}), 0, "ToInteger: @@toPrimitive => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  valueOf: function() {
    return NaN;
  }
}), 0, "ToInteger: valueOf => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  toString: function() {
    return NaN;
  }
}), 0, "ToInteger: toString => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  [Symbol.toPrimitive]: function() {
    return undefined;
  }
}), 0, "ToInteger: @@toPrimitive => undefined => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  valueOf: function() {
    return undefined;
  }
}), 0, "ToInteger: valueOf => undefined => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  toString: function() {
    return undefined;
  }
}), 0, "ToInteger: toString => undefined => NaN => 0");
assert.sameValue("aaaa".indexOf("aa", {
  [Symbol.toPrimitive]: function() {
    return null;
  }
}), 0, "ToInteger: @@toPrimitive => null => 0");
assert.sameValue("aaaa".indexOf("aa", {
  valueOf: function() {
    return null;
  }
}), 0, "ToInteger: valueOf => null => 0");
assert.sameValue("aaaa".indexOf("aa", {
  toString: function() {
    return null;
  }
}), 0, "ToInteger: toString => null => 0");
assert.sameValue("aaaa".indexOf("aa", Object(true)), 1,
  "ToInteger: unbox object with internal slot => true => 1");
assert.sameValue("aaaa".indexOf("aa", {
  [Symbol.toPrimitive]: function() {
    return true;
  }
}), 1, "ToInteger: @@toPrimitive => true => 1");
assert.sameValue("aaaa".indexOf("aa", {
  valueOf: function() {
    return true;
  }
}), 1, "ToInteger: valueOf => true => 1");
assert.sameValue("aaaa".indexOf("aa", {
  toString: function() {
    return true;
  }
}), 1, "ToInteger: toString => true => 1");
assert.sameValue("aaaa".indexOf("aa", Object("1.9")), 1,
  "ToInteger: unbox object with internal slot => parse Number => 1.9 => 1");
assert.sameValue("aaaa".indexOf("aa", {
  [Symbol.toPrimitive]: function() {
    return "1.9";
  }
}), 1, "ToInteger: @@toPrimitive => parse Number => 1.9 => 1");
assert.sameValue("aaaa".indexOf("aa", {
  valueOf: function() {
    return "1.9";
  }
}), 1, "ToInteger: valueOf => parse Number => 1.9 => 1");
assert.sameValue("aaaa".indexOf("aa", {
  toString: function() {
    return "1.9";
  }
}), 1, "ToInteger: toString => parse Number => 1.9 => 1");

