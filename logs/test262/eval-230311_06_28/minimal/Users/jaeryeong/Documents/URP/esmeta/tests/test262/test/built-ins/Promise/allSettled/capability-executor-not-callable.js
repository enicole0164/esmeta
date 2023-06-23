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

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettled
description: >
  Throws a TypeError if either resolve or reject capability is not callable.
info: |
  Promise.allSettled ( iterable )

  ...
  3. Let promiseCapability be ? NewPromiseCapability(C).
  ...

  NewPromiseCapability ( C )

  ...
  5. Let executor be CreateBuiltinFunction(steps, « [[Capability]] »).
  6. Set executor.[[Capability]] to promiseCapability.
  7. Let promise be ? Construct(C, « executor »).
  8. If IsCallable(promiseCapability.[[Resolve]]) is false, throw a TypeError exception.
  9. If IsCallable(promiseCapability.[[Reject]]) is false, throw a TypeError exception.
  ...
features: [Promise.allSettled]
---*/

var checkPoint = '';
function fn1(executor) {
  checkPoint += 'a';
}
Object.defineProperty(fn1, 'resolve', {
  get() { throw new Test262Error(); }
});
assert.throws(TypeError, function() {
  Promise.allSettled.call(fn1, []);
}, 'executor not called at all');
assert.sameValue(checkPoint, 'a', 'executor not called at all');

checkPoint = '';
function fn2(executor) {
  checkPoint += 'a';
  executor();
  checkPoint += 'b';
}
Object.defineProperty(fn2, 'resolve', {
  get() { throw new Test262Error(); }
});
assert.throws(TypeError, function() {
  Promise.allSettled.call(fn2, []);
}, 'executor called with no arguments');
assert.sameValue(checkPoint, 'ab', 'executor called with no arguments');

checkPoint = '';
function fn3(executor) {
  checkPoint += 'a';
  executor(undefined, undefined);
  checkPoint += 'b';
}
Object.defineProperty(fn3, 'resolve', {
  get() { throw new Test262Error(); }
});
assert.throws(TypeError, function() {
  Promise.allSettled.call(fn3, []);
}, 'executor called with (undefined, undefined)');
assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, undefined)');

checkPoint = '';
function fn4(executor) {
  checkPoint += 'a';
  executor(undefined, function() {});
  checkPoint += 'b';
}
Object.defineProperty(fn4, 'resolve', {
  get() { throw new Test262Error(); }
});
assert.throws(TypeError, function() {
  Promise.allSettled.call(fn4, []);
}, 'executor called with (undefined, function)');
assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, function)');

checkPoint = '';
function fn5(executor) {
  checkPoint += 'a';
  executor(function() {}, undefined);
  checkPoint += 'b';
}
Object.defineProperty(fn5, 'resolve', {
  get() { throw new Test262Error(); }
});
assert.throws(TypeError, function() {
  Promise.allSettled.call(fn5, []);
}, 'executor called with (function, undefined)');
assert.sameValue(checkPoint, 'ab', 'executor called with (function, undefined)');

checkPoint = '';
function fn6(executor) {
  checkPoint += 'a';
  executor(123, 'invalid value');
  checkPoint += 'b';
}
Object.defineProperty(fn6, 'resolve', {
  get() { throw new Test262Error(); }
});
assert.throws(TypeError, function() {
  Promise.allSettled.call(fn6, []);
}, 'executor called with (Number, String)');
assert.sameValue(checkPoint, 'ab', 'executor called with (Number, String)');

