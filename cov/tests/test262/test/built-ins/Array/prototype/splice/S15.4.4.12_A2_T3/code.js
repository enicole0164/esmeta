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
    The splice function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.splice
description: >
    If start is positive, use min(start, length).  If deleteCount is
    negative, use 0
---*/

var obj = {
  0: 0,
  1: 1
};
obj.length = 2;
obj.splice = Array.prototype.splice;
var arr = obj.splice(0, -1, 2, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#0: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); arr is Array object. Actual: ' + (arr.getClass()));
}

if (arr.length !== 0) {
  throw new Test262Error('#1: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); arr.length === 0. Actual: ' + (arr.length));
}

if (obj.length !== 4) {
  throw new Test262Error('#2: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj.length === 4. Actual: ' + (obj.length));
}

if (obj[0] !== 2) {
  throw new Test262Error('#3: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[0] === 2. Actual: ' + (obj[0]));
}

if (obj[1] !== 3) {
  throw new Test262Error('#4: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[1] === 3. Actual: ' + (obj[1]));
}

if (obj[2] !== 0) {
  throw new Test262Error('#5: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[2] === 0. Actual: ' + (obj[2]));
}

if (obj[3] !== 1) {
  throw new Test262Error('#6: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[3] === 1. Actual: ' + (obj[3]));
}

if (obj[4] !== undefined) {
  throw new Test262Error('#7: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[4] === undefined. Actual: ' + (obj[4]));
}

