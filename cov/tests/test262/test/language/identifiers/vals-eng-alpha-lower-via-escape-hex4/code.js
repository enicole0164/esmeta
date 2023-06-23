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
es5id: 7.6_A4.1_T2
description: Check ENGLISH SMALL ALPHABET
---*/

var \u0061 = 1;
assert.sameValue(a, 1);

var \u0062 = 1;
assert.sameValue(b, 1);

var \u0063 = 1;
assert.sameValue(c, 1);

var \u0064 = 1;
assert.sameValue(d, 1);

var \u0065 = 1;
assert.sameValue(e, 1);

var \u0066 = 1;
assert.sameValue(f, 1);

var \u0067 = 1;
assert.sameValue(g, 1);

var \u0068 = 1;
assert.sameValue(h, 1);

var \u0069 = 1;
assert.sameValue(i, 1);

var \u006A = 1;
assert.sameValue(j, 1);

var \u006B = 1;
assert.sameValue(k, 1);

var \u006C = 1;
assert.sameValue(l, 1);

var \u006D = 1;
assert.sameValue(m, 1);

var \u006E = 1;
assert.sameValue(n, 1);

var \u006F = 1;
assert.sameValue(o, 1);

var \u0070 = 1;
assert.sameValue(p, 1);

var \u0071 = 1;
assert.sameValue(q, 1);

var \u0072 = 1;
assert.sameValue(r, 1);

var \u0073 = 1;
assert.sameValue(s, 1);

var \u0074 = 1;
assert.sameValue(t, 1);

var \u0075 = 1;
assert.sameValue(u, 1);

var \u0076 = 1;
assert.sameValue(v, 1);

var \u0077 = 1;
assert.sameValue(w, 1);

var \u0078 = 1;
assert.sameValue(x, 1);

var \u0079 = 1;
assert.sameValue(y, 1);

var \u007A = 1;
assert.sameValue(z, 1);

