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

// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-iter-val-array-prototype.case
// - src/dstr-binding/default/async-gen-func-decl.template
/*---
description: Array destructuring uses overriden Array.prototype[Symbol.iterator] (async generator function declaration)
esid: sec-asyncgenerator-definitions-instantiatefunctionobject
features: [Symbol.iterator, generators, async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorDeclaration : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        3. Let F be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody,
            scope, strict).
        [...]


    Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializer_opt

    1. Let bindingId be StringValue of BindingIdentifier.
    2. Let lhs be ? ResolveBinding(bindingId, environment).
    3. If iteratorRecord.[[Done]] is false, then
        a. Let next be IteratorStep(iteratorRecord).
        b. If next is an abrupt completion, set iteratorRecord.[[Done]] to true.
        c. ReturnIfAbrupt(next).
        d. If next is false, set iteratorRecord.[[Done]] to true.
        e. Else,
            i. Let v be IteratorValue(next).
            ii. If v is an abrupt completion, set iteratorRecord.[[Done]] to true.
            iii. ReturnIfAbrupt(v).
    [...]
    7. Return InitializeReferencedBinding(lhs, v).

---*/
Array.prototype[Symbol.iterator] = function* () {
    if (this.length > 0) {
        yield this[0];
    }
    if (this.length > 1) {
        yield this[1];
    }
    if (this.length > 2) {
        yield 42;
    }
};


var callCount = 0;
async function* f([x, y, z]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 42);
  callCount = callCount + 1;
};
f([1, 2, 3]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);

