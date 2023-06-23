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
info: Correct interpretation of RUSSIAN ALPHABET
es5id: 7.6_A4.2_T2
description: Check RUSSIAN SMALL ALPHABET
---*/

var \u0430 = 1;
assert.sameValue(а, 1);

var \u0431 = 1;
assert.sameValue(б, 1);

var \u0432 = 1;
assert.sameValue(в, 1);

var \u0433 = 1;
assert.sameValue(г, 1);

var \u0434 = 1;
assert.sameValue(д, 1);

var \u0435 = 1;
assert.sameValue(е, 1);

var \u0436 = 1;
assert.sameValue(ж, 1);

var \u0437 = 1;
assert.sameValue(з, 1);

var \u0438 = 1;
assert.sameValue(и, 1);

var \u0439 = 1;
assert.sameValue(й, 1);

var \u043A = 1;
assert.sameValue(к, 1);

var \u043B = 1;
assert.sameValue(л, 1);

var \u043C = 1;
assert.sameValue(м, 1);

var \u043D = 1;
assert.sameValue(н, 1);

var \u043E = 1;
assert.sameValue(о, 1);

var \u043F = 1;
assert.sameValue(п, 1);

var \u0440 = 1;
assert.sameValue(р, 1);

var \u0441 = 1;
assert.sameValue(с, 1);

var \u0442 = 1;
assert.sameValue(т, 1);

var \u0443 = 1;
assert.sameValue(у, 1);

var \u0444 = 1;
assert.sameValue(ф, 1);

var \u0445 = 1;
assert.sameValue(х, 1);

var \u0446 = 1;
assert.sameValue(ц, 1);

var \u0447 = 1;
assert.sameValue(ч, 1);

var \u0448 = 1;
assert.sameValue(ш, 1);

var \u0449 = 1;
assert.sameValue(щ, 1);

var \u044A = 1;
assert.sameValue(ъ, 1);

var \u044B = 1;
assert.sameValue(ы, 1);

var \u044C = 1;
assert.sameValue(ь, 1);

var \u044D = 1;
assert.sameValue(э, 1);

var \u044E = 1;
assert.sameValue(ю, 1);

var \u044F = 1;
assert.sameValue(я, 1);

var \u0451 = 1;
assert.sameValue(ё, 1);

