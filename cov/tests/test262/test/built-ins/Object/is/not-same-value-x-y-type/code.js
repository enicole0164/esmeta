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

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.10
description: >
    Object.is ( value1, value2 )

    7.2.9 SameValue(x, y)

    ...
    3. If Type(x) is different from Type(y), return false.
    ...

---*/

var a = {};

assert.sameValue(Object.is(a, true), false, "`Object.is(a, true)` returns `false`");
assert.sameValue(Object.is(a, ''), false, "`Object.is(a, '')` returns `false`");
assert.sameValue(Object.is(a, 0), false, "`Object.is(a, 0)` returns `false`");
assert.sameValue(
  Object.is(a, undefined),
  false,
  "`Object.is(a, undefined)` returns `false`"
);

assert.sameValue(Object.is(NaN, true), false, "`Object.is(NaN, true)` returns `false`");
assert.sameValue(Object.is(NaN, ''), false, "`Object.is(NaN, '')` returns `false`");
assert.sameValue(Object.is(NaN, a), false, "`Object.is(NaN, a)` returns `false`");
assert.sameValue(
  Object.is(NaN, undefined),
  false,
  "`Object.is(NaN, undefined)` returns `false`"
);
assert.sameValue(Object.is(NaN, null), false, "`Object.is(NaN, null)` returns `false`");

assert.sameValue(Object.is(true, 0), false, "`Object.is(true, 0)` returns `false`");
assert.sameValue(Object.is(true, a), false, "`Object.is(true, a)` returns `false`");
assert.sameValue(
  Object.is(true, undefined),
  false,
  "`Object.is(true, undefined)` returns `false`"
);
assert.sameValue(Object.is(true, null), false, "`Object.is(true, null)` returns `false`");
assert.sameValue(Object.is(true, NaN), false, "`Object.is(true, NaN)` returns `false`");
assert.sameValue(Object.is(true, ''), false, "`Object.is(true, '')` returns `false`");

assert.sameValue(Object.is(false, 0), false, "`Object.is(false, 0)` returns `false`");
assert.sameValue(Object.is(false, a), false, "`Object.is(false, a)` returns `false`");
assert.sameValue(
  Object.is(false, undefined),
  false,
  "`Object.is(false, undefined)` returns `false`"
);
assert.sameValue(Object.is(false, null), false, "`Object.is(false, null)` returns `false`");
assert.sameValue(Object.is(false, NaN), false, "`Object.is(false, NaN)` returns `false`");
assert.sameValue(Object.is(false, ''), false, "`Object.is(false, '')` returns `false`");

assert.sameValue(Object.is(0, true), false, "`Object.is(0, true)` returns `false`");
assert.sameValue(Object.is(0, a), false, "`Object.is(0, a)` returns `false`");
assert.sameValue(
  Object.is(0, undefined),
  false,
  "`Object.is(0, undefined)` returns `false`"
);
assert.sameValue(Object.is(0, null), false, "`Object.is(0, null)` returns `false`");
assert.sameValue(Object.is(0, NaN), false, "`Object.is(0, NaN)` returns `false`");
assert.sameValue(Object.is(0, ''), false, "`Object.is(0, '')` returns `false`");

