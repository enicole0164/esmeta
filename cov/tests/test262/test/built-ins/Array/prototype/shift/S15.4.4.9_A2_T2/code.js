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
    The shift function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.shift
description: >
    If ToUint32(length) equal zero, call the [[Put]] method  of this
    object with arguments "length" and 0 and return undefined
---*/

var obj = {};
obj.shift = Array.prototype.shift;

obj.length = NaN;
var shift = obj.shift();
if (shift !== undefined) {
  throw new Test262Error('#1: var obj = {}; obj.length = NaN; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

if (obj.length !== 0) {
  throw new Test262Error('#2: var obj = {}; obj.length = NaN; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
}

obj.length = Number.NEGATIVE_INFINITY;
var shift = obj.shift();
if (shift !== undefined) {
  throw new Test262Error('#5: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

if (obj.length !== 0) {
  throw new Test262Error('#6: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
}

obj.length = -0;
var shift = obj.shift();
if (shift !== undefined) {
  throw new Test262Error('#7: var obj = {}; obj.length = -0; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

if (obj.length !== 0) {
  throw new Test262Error('#8: var obj = {}; obj.length = -0; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
} else {
  if (1 / obj.length !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#8: var obj = {}; obj.length = -0; obj.shift = Array.prototype.shift; obj.shift(); obj.length === +0. Actual: ' + (obj.length));
  }
}

obj.length = 0.5;
var shift = obj.shift();
if (shift !== undefined) {
  throw new Test262Error('#9: var obj = {}; obj.length = 0.5; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

if (obj.length !== 0) {
  throw new Test262Error('#10: var obj = {}; obj.length = 0.5; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
}

obj.length = new Number(0);
var shift = obj.shift();
if (shift !== undefined) {
  throw new Test262Error('#11: var obj = {}; obj.length = new Number(0); obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

if (obj.length !== 0) {
  throw new Test262Error('#12: var obj = {}; obj.length = new Number(0); obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
}

