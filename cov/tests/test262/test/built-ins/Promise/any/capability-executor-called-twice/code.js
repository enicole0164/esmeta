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

// Copyright (C) 2019 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Throws a TypeError if capabilities executor already called with non-undefined values.
info: |
  Promise.any ( iterable )

  ...
  2. Let promiseCapability be ? NewPromiseCapability(C).
  ...

  GetCapabilitiesExecutor Functions

  ...
  4. If promiseCapability.[[Resolve]] is not undefined, throw a TypeError exception.
  5. If promiseCapability.[[Reject]] is not undefined, throw a TypeError exception.
  6. Set promiseCapability.[[Resolve]] to resolve.
  7. Set promiseCapability.[[Reject]] to reject.
  ...
features: [Promise.any]
---*/

var checkPoint = '';
function fn1(executor) {
  checkPoint += 'a';
  executor();
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}
fn1.resolve = function() {
  throw new Test262Error();
};
Promise.any.call(fn1, []);
assert.sameValue(checkPoint, 'abc', 'executor initially called with no arguments');

checkPoint = '';
function fn2(executor) {
  checkPoint += 'a';
  executor(undefined, undefined);
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}
fn2.resolve = function() {
  throw new Test262Error();
};
Promise.any.call(fn2, []);
assert.sameValue(checkPoint, 'abc', 'executor initially called with (undefined, undefined)');

checkPoint = '';
function fn3(executor) {
  checkPoint += 'a';
  executor(undefined, function() {});
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}
Object.defineProperty(fn3, 'resolve', {
  get() {
    throw new Test262Error();
  }
});
assert.throws(TypeError, function() {
  Promise.any.call(fn3, []);
}, 'executor initially called with (undefined, function)');
assert.sameValue(checkPoint, 'ab', 'executor initially called with (undefined, function)');

checkPoint = '';
function fn4(executor) {
  checkPoint += 'a';
  executor(function() {}, undefined);
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}
Object.defineProperty(fn4, 'resolve', {
  get() {
    throw new Test262Error();
  }
});
assert.throws(TypeError, function() {
  Promise.any.call(fn4, []);
}, 'executor initially called with (function, undefined)');
assert.sameValue(checkPoint, 'ab', 'executor initially called with (function, undefined)');

checkPoint = '';
function fn5(executor) {
  checkPoint += 'a';
  executor('invalid value', 123);
  checkPoint += 'b';
  executor(function() {}, function() {});
  checkPoint += 'c';
}
Object.defineProperty(fn5, 'resolve', {
  get() {
    throw new Test262Error();
  }
});
assert.throws(TypeError, function() {
  Promise.any.call(fn5, []);
}, 'executor initially called with (String, Number)');
assert.sameValue(checkPoint, 'ab', 'executor initially called with (String, Number)');

