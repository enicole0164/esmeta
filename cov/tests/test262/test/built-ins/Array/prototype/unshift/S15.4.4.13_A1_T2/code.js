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
info: |
    The arguments are prepended to the start of the array, such that
    their order within the array is the same as the order in which they appear in
    the argument list
esid: sec-array.prototype.unshift
description: Checking case when unsift is given many arguments
---*/

var x = [];
if (x.length !== 0) {
  throw new Test262Error('#1: x = []; x.length === 0. Actual: ' + (x.length));
}

x[0] = 0;
var unshift = x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1);
if (unshift !== 6) {
  throw new Test262Error('#2: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1) === 6. Actual: ' + (unshift));
}

if (x[5] !== 0) {
  throw new Test262Error('#3: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[5] === 0. Actual: ' + (x[5]));
}

if (x[0] !== true) {
  throw new Test262Error('#4: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[0] === true. Actual: ' + (x[0]));
}

if (x[1] !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#5: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[1] === Number.POSITIVE_INFINITY. Actual: ' + (x[1]));
}

if (x[2] !== "NaN") {
  throw new Test262Error('#6: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[2] === "NaN". Actual: ' + (x[2]));
}

if (x[3] !== "1") {
  throw new Test262Error('#7: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[3] === "1". Actual: ' + (x[3]));
}

if (x[4] !== -1) {
  throw new Test262Error('#8: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[4] === -1. Actual: ' + (x[4]));
}

if (x.length !== 6) {
  throw new Test262Error('#9: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x.length === 6. Actual: ' + (x.length));
}

