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
defines: [$DONE]
---*/

function __consolePrintHandle__(msg) {
  print(msg);
}

function $DONE(error) {
  if (error) {
    if(typeof error === 'object' && error !== null && 'name' in error) {
      __consolePrintHandle__('Test262:AsyncTestFailure:' + error.name + ': ' + error.message);
    } else {
      __consolePrintHandle__('Test262:AsyncTestFailure:Test262Error: ' + error);
    }
  } else {
    __consolePrintHandle__('Test262:AsyncTestComplete');
  }
}

// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Rejecting through an abrupt completion - captured in a queued job
esid: sec-promise-executor
info: |
  25.4.3.1 Promise ( executor )

  ...
  9. Let completion be Call(executor, undefined, « resolvingFunctions.[[Resolve]],
    resolvingFunctions.[[Reject]] »).
  10. If completion is an abrupt completion, then
    a. Perform ? Call(resolvingFunctions.[[Reject]], undefined, « completion.[[Value]] »).
  11. Return promise.

  25.4.1.3.1 Promise Reject Functions

  ...
  6. Return RejectPromise(promise, reason).

  25.4.5.3.1 PerformPromiseThen ( promise, onFulfilled, onRejected, resultCapability )

  ...
  4. If IsCallable(onRejected) is false, then
    a. Set onRejected to undefined.
  ...
  6. Let rejectReaction be the PromiseReaction { [[Capability]]: resultCapability,
    [[Type]]: "Reject", [[Handler]]: onRejected }.
  ...
  9. Else,
    a. Assert: The value of promise.[[PromiseState]] is "rejected".
    ...
    d. Perform EnqueueJob("PromiseJobs", PromiseReactionJob, « rejectReaction, reason »).
flags: [async]
---*/

var thenable = Promise.resolve();
var p = new Promise(function() {
  throw thenable;
});

p.then(function() {
  $DONE('The promise should not be fulfilled.');
}).then(function() {
  $DONE('The promise should not be fulfilled.');
}, function(x) {
  if (x !== thenable) {
    $DONE('The promise should be rejected with the resolution value.');
    return;
  }
  $DONE();
});

