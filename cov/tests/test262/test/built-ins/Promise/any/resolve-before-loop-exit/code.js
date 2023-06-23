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

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Cannot tamper remainingElementsCount when two Promise.any Reject Element Function are called in succession.
info: |
  Let result be PerformPromiseAny(iteratorRecord, C, promiseCapability).

  Runtime Semantics: PerformPromiseAny

  ...
  Let remainingElementsCount be a new Record { [[value]]: 1 }.
  ...
  8.d ...
    ii. Set remainingElementsCount.[[value]] to remainingElementsCount.[[value]] − 1.
    iii. If remainingElementsCount.[[value]] is 0,
      1. Let error be a newly created AggregateError object.
      2. Perform ! DefinePropertyOrThrow(error, "errors", Property Descriptor { [[Configurable]]: true, [[Enumerable]]: false, [[Writable]]: true, [[Value]]: errors }).
      3. Return ThrowCompletion(error).
  ...

  Promise.any Reject Element Functions
  ...
  Let alreadyCalled be the value of F's [[AlreadyCalled]] internal slot.
  If alreadyCalled.[[value]] is true, return undefined.
  Set alreadyCalled.[[value]] to true.
  ...

features: [Promise.any, arrow-function]
---*/

let callCount = 0;
let errorArray;

function Constructor(executor) {
  function reject(error) {
    callCount += 1;
    errorArray = error.errors;

    assert(Array.isArray(error.errors), "error is array");
    assert.sameValue(error.errors.length, 3, "error.length");
    assert.sameValue(error.errors[0], "p1-rejection", "error.errors[0] === 'p1-rejection'");
    assert.sameValue(error.errors[1], "p2-rejection", "error.errors[1] === 'p2-rejection'");
    assert.sameValue(error.errors[2], "p3-rejection", "error.errors[2] === 'p3-rejection'");
    assert(error instanceof AggregateError, "error instanceof AggregateError");
  }
  executor(Test262Error.thrower, reject);
}
Constructor.resolve = function(v) {
  return v;
};

let p1OnRejected;

let p1 = {
  then(onResolved, onRejected) {
    p1OnRejected = onRejected;
  }
};
let p2 = {
  then(onResolved, onRejected) {
    p1OnRejected("p1-rejection");
    onRejected("p2-rejection");
  }
};
let p3 = {
  then(onResolved, onRejected) {
    onRejected("p3-rejection");
  }
};

assert.sameValue(callCount, 0, "callCount before call to any()");

Promise.any.call(Constructor, [p1, p2, p3]);

assert.sameValue(callCount, 1, "callCount after call to any()");
assert.sameValue(errorArray[0], "p1-rejection", "errorArray[0] === 'p1-rejection'");
assert.sameValue(errorArray[1], "p2-rejection", "errorArray[1] === 'p2-rejection'");
assert.sameValue(errorArray[2], "p3-rejection", "errorArray[2] === 'p3-rejection'");

p1OnRejected("unexpectedonRejectedValue");

assert.sameValue(callCount, 1, "callCount after call to p1OnRejected()");
assert.sameValue(
  errorArray[0],
  "p1-rejection",
  "errorArray[0] === 'p1-rejection', after call to p1OnRejected(...)"
);
assert.sameValue(
  errorArray[1],
  "p2-rejection",
  "errorArray[1] === 'p2-rejection', after call to p1OnRejected(...)"
);
assert.sameValue(
  errorArray[2],
  "p3-rejection",
  "errorArray[2] === 'p3-rejection', after call to p1OnRejected(...)"
);

