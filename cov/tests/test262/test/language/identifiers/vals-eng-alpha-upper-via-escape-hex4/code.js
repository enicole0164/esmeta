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

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Correct interpretation of ENGLISH ALPHABET
es5id: 7.6_A4.1_T1
description: Check ENGLISH CAPITAL ALPHABET
---*/

var \u0041 = 1;
assert.sameValue(A, 1);

var \u0042 = 1;
assert.sameValue(B, 1);

var \u0043 = 1;
assert.sameValue(C, 1);

var \u0044 = 1;
assert.sameValue(D, 1);

var \u0045 = 1;
assert.sameValue(E, 1);

var \u0046 = 1;
assert.sameValue(F, 1);

var \u0047 = 1;
assert.sameValue(G, 1);

var \u0048 = 1;
assert.sameValue(H, 1);

var \u0049 = 1;
assert.sameValue(I, 1);

var \u004A = 1;
assert.sameValue(J, 1);

var \u004B = 1;
assert.sameValue(K, 1);

var \u004C = 1;
assert.sameValue(L, 1);

var \u004D = 1;
assert.sameValue(M, 1);

var \u004E = 1;
assert.sameValue(N, 1);

var \u004F = 1;
assert.sameValue(O, 1);

var \u0050 = 1;
assert.sameValue(P, 1);

var \u0051 = 1;
assert.sameValue(Q, 1);

var \u0052 = 1;
assert.sameValue(R, 1);

var \u0053 = 1;
assert.sameValue(S, 1);

var \u0054 = 1;
assert.sameValue(T, 1);

var \u0055 = 1;
assert.sameValue(U, 1);

var \u0056 = 1;
assert.sameValue(V, 1);

var \u0057 = 1;
assert.sameValue(W, 1);

var \u0058 = 1;
assert.sameValue(X, 1);

var \u0059 = 1;
assert.sameValue(Y, 1);

var \u005A = 1;
assert.sameValue(Z, 1);

