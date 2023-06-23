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

// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `yield` is a valid expression within generator function bodies.
es6id: 14.4
features: [generators]
---*/

var iter, result;
function* g1() { (yield) }
function* g2() { [yield] }
function* g3() { {yield} }
function* g4() { yield, yield; }
function* g5() { (yield) ? yield : yield; }

iter = g1();
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Within grouping operator: result `value`'
);
assert.sameValue(
  result.done, false, 'Within grouping operator: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Following grouping operator: result `value`'
);
assert.sameValue(
  result.done, true, 'Following grouping operator: result `done` flag'
);

iter = g2();
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Within array literal: result `value`'
);
assert.sameValue(
  result.done, false, 'Within array literal: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Following array literal: result `value`'
);
assert.sameValue(
  result.done, true, 'Following array literal: result `done` flag'
);

iter = g3();
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Within object literal: result `value`'
);
assert.sameValue(
  result.done, false, 'Within object literal: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Following object literal: result `value`'
);
assert.sameValue(
  result.done, true, 'Following object literal: result `done` flag'
);

iter = g4();
result = iter.next();
assert.sameValue(
  result.value,
  undefined,
  'First expression in comma expression: result `value`'
);
assert.sameValue(
  result.done,
  false,
  'First expression in comma expression: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value,
  undefined,
  'Second expression in comma expression: result `value`'
);
assert.sameValue(
  result.done,
  false,
  'Second expression in comma expression: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Following comma expression: result `value`'
);
assert.sameValue(
  result.done, true, 'Following comma expression: result `done` flag'
);

iter = g5();
result = iter.next();
assert.sameValue(
  result.value,
  undefined,
  'Conditional expression in conditional operator: result `value`'
);
assert.sameValue(
  result.done,
  false,
  'Conditional expression in conditional operator: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value,
  undefined,
  'Branch in conditional operator: result `value`'
);
assert.sameValue(
  result.done,
  false,
  'Branch in conditional operator: result `done` flag'
);
result = iter.next();
assert.sameValue(
  result.value, undefined, 'Following conditional operator: result `value`'
);
assert.sameValue(
  result.done, true, 'Following conditional operator: result `done` flag'
);

