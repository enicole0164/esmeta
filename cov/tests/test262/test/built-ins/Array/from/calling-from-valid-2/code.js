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

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-array.from
description: Calling from with a valid map function with thisArg
info: |
  22.1.2.1 Array.from ( items [ , mapfn [ , thisArg ] ] )

  ...
  10. Let len be ToLength(Get(arrayLike, "length")).
  11. ReturnIfAbrupt(len).
  12. If IsConstructor(C) is true, then
    a. Let A be Construct(C, «len»).
  13. Else,
    b. Let A be ArrayCreate(len).
  14. ReturnIfAbrupt(A).
  15. Let k be 0.
  16. Repeat, while k < len
    a. Let Pk be ToString(k).
    b. Let kValue be Get(arrayLike, Pk).
    c. ReturnIfAbrupt(kValue).
    d. If mapping is true, then
      i. Let mappedValue be Call(mapfn, T, «kValue, k»).
  ...
---*/

var list = {
  '0': 41,
  '1': 42,
  '2': 43,
  length: 3
};
var calls = [];
var thisArg = {};

function mapFn(value) {
  calls.push({
    args: arguments,
    thisArg: this
  });
  return value * 2;
}

var result = Array.from(list, mapFn, thisArg);

assert.sameValue(result.length, 3, 'The value of result.length is expected to be 3');
assert.sameValue(result[0], 82, 'The value of result[0] is expected to be 82');
assert.sameValue(result[1], 84, 'The value of result[1] is expected to be 84');
assert.sameValue(result[2], 86, 'The value of result[2] is expected to be 86');

assert.sameValue(calls.length, 3, 'The value of calls.length is expected to be 3');

assert.sameValue(calls[0].args.length, 2, 'The value of calls[0].args.length is expected to be 2');
assert.sameValue(calls[0].args[0], 41, 'The value of calls[0].args[0] is expected to be 41');
assert.sameValue(calls[0].args[1], 0, 'The value of calls[0].args[1] is expected to be 0');
assert.sameValue(calls[0].thisArg, thisArg, 'The value of calls[0].thisArg is expected to equal the value of thisArg');

assert.sameValue(calls[1].args.length, 2, 'The value of calls[1].args.length is expected to be 2');
assert.sameValue(calls[1].args[0], 42, 'The value of calls[1].args[0] is expected to be 42');
assert.sameValue(calls[1].args[1], 1, 'The value of calls[1].args[1] is expected to be 1');
assert.sameValue(calls[1].thisArg, thisArg, 'The value of calls[1].thisArg is expected to equal the value of thisArg');

assert.sameValue(calls[2].args.length, 2, 'The value of calls[2].args.length is expected to be 2');
assert.sameValue(calls[2].args[0], 43, 'The value of calls[2].args[0] is expected to be 43');
assert.sameValue(calls[2].args[1], 2, 'The value of calls[2].args[1] is expected to be 2');
assert.sameValue(calls[2].thisArg, thisArg, 'The value of calls[2].thisArg is expected to equal the value of thisArg');

