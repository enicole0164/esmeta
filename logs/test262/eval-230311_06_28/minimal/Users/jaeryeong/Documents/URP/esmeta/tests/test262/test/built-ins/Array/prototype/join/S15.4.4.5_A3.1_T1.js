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
info: Operator use ToString from separator
esid: sec-array.prototype.join
description: >
    Checking separator in ["", "\\", "&", true, Infinity, null,
    undefind, NaN]
---*/

var x = new Array(0, 1, 2, 3);
if (x.join("") !== "0123") {
  throw new Test262Error('#0: x = new Array(0,1,2,3); x.join("") === "0123". Actual: ' + (x.join("")));
}

x = new Array(0, 1, 2, 3);
if (x.join("\\") !== "0\\1\\2\\3") {
  throw new Test262Error('#1: x = new Array(0,1,2,3); x.join("\\") === "0\\1\\2\\3". Actual: ' + (x.join("\\")));
}

if (x.join("&") !== "0&1&2&3") {
  throw new Test262Error('#2: x = new Array(0,1,2,3); x.join("&") === "0&1&2&3". Actual: ' + (x.join("&")));
}

if (x.join(true) !== "0true1true2true3") {
  throw new Test262Error('#3: x = new Array(0,1,2,3); x.join(true) === "0true1true2true3". Actual: ' + (x.join(true)));
}

if (x.join(Infinity) !== "0Infinity1Infinity2Infinity3") {
  throw new Test262Error('#4: x = new Array(0,1,2,3); x.join(Infinity) === "0Infinity1Infinity2Infinity3". Actual: ' + (x.join(Infinity)));
}

if (x.join(null) !== "0null1null2null3") {
  throw new Test262Error('#3: 5 = new Array(0,1,2,3); x.join(null) === "0null1null2null3". Actual: ' + (x.join(null)));
}

if (x.join(undefined) !== "0,1,2,3") {
  throw new Test262Error('#6: x = new Array(0,1,2,3); x.join(undefined) === "0,1,2,3". Actual: ' + (x.join(undefined)));
}

if (x.join(NaN) !== "0NaN1NaN2NaN3") {
  throw new Test262Error('#7: x = new Array(0,1,2,3); x.join(NaN) === "0NaN1NaN2NaN3". Actual: ' + (x.join(NaN)));
}

