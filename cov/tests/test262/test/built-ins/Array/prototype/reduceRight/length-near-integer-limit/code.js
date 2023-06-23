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

// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Compare the contents of two arrays
defines: [compareArray]
---*/

function compareArray(a, b) {
  if (b.length !== a.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (!compareArray.isSameValue(b[i], a[i])) {
      return false;
    }
  }
  return true;
}

compareArray.isSameValue = function(a, b) {
  if (a === 0 && b === 0) return 1 / a === 1 / b;
  if (a !== a && b !== b) return true;

  return a === b;
};

compareArray.format = function(arrayLike) {
  return `[${[].map.call(arrayLike, String).join(', ')}]`;
};

assert.compareArray = function(actual, expected, message) {
  message  = message === undefined ? '' : message;

  if (typeof message === 'symbol') {
    message = message.toString();
  }

  assert(actual != null, `First argument shouldn't be nullish. ${message}`);
  assert(expected != null, `Second argument shouldn't be nullish. ${message}`);
  var format = compareArray.format;
  var result = compareArray(actual, expected);

  // The following prevents actual and expected from being iterated and evaluated
  // more than once unless absolutely necessary.
  if (!result) {
    assert(false, `Expected ${format(actual)} and ${format(expected)} to have the same contents. ${message}`);
  }
};

// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
description: >
  Elements are processed in an array-like object
  whose "length" property is near the integer limit.
info: |
  Array.prototype.reduceRight ( callbackfn [ , initialValue ] )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  [...]
  9. Repeat, while k ≥ 0
    a. Let Pk be ! ToString(k).
    b. Let kPresent be ? HasProperty(O, Pk).
    c. If kPresent is true, then
      i. Let kValue be ? Get(O, Pk).
      ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
    [...]
includes: [compareArray.js]
---*/

var arrayLike = {
  length: Number.MAX_SAFE_INTEGER,
};

arrayLike[Number.MAX_SAFE_INTEGER - 1] = 1;
arrayLike[Number.MAX_SAFE_INTEGER - 3] = 3;

var accumulator = function(acc, el, index) {
  acc.push([el, index]);

  if (el === 3) {
    throw acc;
  }

  return acc;
};

try {
  Array.prototype.reduceRight.call(arrayLike, accumulator, []);
  throw new Test262Error("should not be called");
} catch (acc) {
  assert.sameValue(acc.length, 2, 'The value of acc.length is expected to be 2');
  assert.compareArray(
    acc[0],
    [1, Number.MAX_SAFE_INTEGER - 1],
    'The value of acc[0] is expected to be [1, Number.MAX_SAFE_INTEGER - 1]'
  );
  assert.compareArray(
    acc[1],
    [3, Number.MAX_SAFE_INTEGER - 3],
    'The value of acc[1] is expected to be [3, Number.MAX_SAFE_INTEGER - 3]'
  );
}

