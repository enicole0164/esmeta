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

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-evaldeclarationinstantiation
es6id: 18.2.1.2
description: >
    Global functions are not created if conflicting function declarations were
    detected.
info: |
  Runtime Semantics: EvalDeclarationInstantiation( body, varEnv, lexEnv, strict)

  ...
  8. For each d in varDeclarations, in reverse list order do
    a. If d is neither a VariableDeclaration or a ForBinding, then
      i. Assert: d is either a FunctionDeclaration or a GeneratorDeclaration.
      ii. NOTE If there are multiple FunctionDeclarations for the same name,
          the last declaration is used.
      iii. Let fn be the sole element of the BoundNames of d.
      iv. If fn is not an element of declaredFunctionNames, then
        1. If varEnvRec is a global Environment Record, then
          a. Let fnDefinable be varEnvRec.CanDeclareGlobalFunction(fn).
          b. ReturnIfAbrupt(fnDefinable).
          c. If fnDefinable is false, throw TypeError exception.
  ...
  14. For each production f in functionsToInitialize, do
    a. Let fn be the sole element of the BoundNames of f.
    b. Let fo be the result of performing InstantiateFunctionObject for f with argument lexEnv.
    c. If varEnvRec is a global Environment Record, then
      i. Let status be varEnvRec.CreateGlobalFunctionBinding(fn, fo, true).
      ii. ReturnIfAbrupt(status).
  ...
---*/

try {
  (0,eval)("function shouldNotBeDefined1() {} function NaN() {} function shouldNotBeDefined2() {}");
} catch (e) {
  // Ignore TypeError exception.
}

assert.sameValue(
  Object.getOwnPropertyDescriptor(this, "shouldNotBeDefined1"),
  undefined,
  "declaration preceding"
);
assert.sameValue(
  Object.getOwnPropertyDescriptor(this, "shouldNotBeDefined2"),
  undefined,
  "declaration following"
);

