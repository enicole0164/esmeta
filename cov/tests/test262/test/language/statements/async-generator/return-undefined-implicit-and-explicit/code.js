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
    Compare the contents of two arrays
defines: [compareArray]
---*/

function compareArray(a, b) {
  if (b.length !== a.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (!compareArray.isSameValue(b[i], a[i])) {
      return false;
    }
  }
  return true;
}

compareArray.isSameValue = function(a, b) {
  if (a === 0 && b === 0) return 1 / a === 1 / b;
  if (a !== a && b !== b) return true;

  return a === b;
};

compareArray.format = function(arrayLike) {
  return `[${[].map.call(arrayLike, String).join(', ')}]`;
};

assert.compareArray = function(actual, expected, message) {
  message  = message === undefined ? '' : message;

  if (typeof message === 'symbol') {
    message = message.toString();
  }

  assert(actual != null, `First argument shouldn't be nullish. ${message}`);
  assert(expected != null, `Second argument shouldn't be nullish. ${message}`);
  var format = compareArray.format;
  var result = compareArray(actual, expected);

  // The following prevents actual and expected from being iterated and evaluated
  // more than once unless absolutely necessary.
  if (!result) {
    assert(false, `Expected ${format(actual)} and ${format(expected)} to have the same contents. ${message}`);
  }
};

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

// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-return-statement-runtime-semantics-evaluation
description: >
  Return with an explicit return value awaits this value.
info: |
  13.10.1 Runtime Semantics: Evaluation

    ReturnStatement : return;
      1. Return Completion { [[Type]]: return, [[Value]]: undefined, [[Target]]: empty }.

    ReturnStatement : return Expression ;
      1. Let exprRef be the result of evaluating Expression.
      2. Let exprValue be ? GetValue(exprRef).
      3. If ! GetGeneratorKind() is async, set exprValue to ? Await(exprValue).
      4. Return Completion { [[Type]]: return, [[Value]]: exprValue, [[Target]]: empty }.

  25.5.3.2 AsyncGeneratorStart ( generator, generatorBody )

    ...
    5. Set the code evaluation state of genContext such that when evaluation is resumed for that
       execution context the following steps will be performed:
      a. Let result be the result of evaluating generatorBody.
      ...
      e. If result is a normal completion, let resultValue be undefined.
      ...
      g. Return ! AsyncGeneratorResolve(generator, resultValue, true).

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/

// 25.5.3.2, step 5.e: |generatorBody| execution ends with a normal completion.
async function* g1() {
  // no return
}

// 13.10.1: No expression form means direct return.
async function* g2() {
  return;
}

// 13.10.1: Explicit expression requires Await.
async function* g3() {
  return undefined; // Return undefined via global value `undefined`.
}

// 13.10.1: Explicit expression requires Await.
async function* g4() {
  return void 0; // Return undefined via void expression.
}

var expected = [
  "tick 1",

  "g1 ret",
  "g2 ret",

  "tick 2",

  "g3 ret",
  "g4 ret",
];

var actual = [];

Promise.resolve(0)
  .then(() => actual.push("tick 1"))
  .then(() => actual.push("tick 2"))
  .then(() => {
    assert.compareArray(actual, expected, "Ticks for implicit and explicit return undefined");
}).then($DONE, $DONE);

g1().next().then(v => actual.push("g1 ret"));
g2().next().then(v => actual.push("g2 ret"));
g3().next().then(v => actual.push("g3 ret"));
g4().next().then(v => actual.push("g4 ret"));

