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

// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
  In a class, static computed property method names can be a symbol
info: |
  Set order: "length", "name", "prototype", static methods

  Runtime Semantics: ClassDefinitionEvaluation

  ...
  11. Let constructorInfo be ! DefineMethod of constructor with arguments proto and constructorParent.
  12. Let F be constructorInfo.[[Closure]].
  13. Perform SetFunctionName(F, className).
  14. Perform MakeConstructor(F, false, proto).
  ...
  19. Else, let methods be NonConstructorMethodDefinitions of ClassBody.
  20. For each ClassElement m in order from methods, do
    a. If IsStatic of m is false, then
      ...
    b. Else,
      i. Let status be PropertyDefinitionEvaluation of m with arguments F and false.
    ...

  ---

  Object.getOwnPropertyNames ( O )

  1. Return ? GetOwnPropertyKeys(O, string).

  Object.getOwnPropertySymbols ( O )

  1. Return ? GetOwnPropertyKeys(O, symbol).

  Runtime Semantics: GetOwnPropertyKeys ( O, type )

  1. Let obj be ? ToObject(O).
  2. Let keys be ? obj.[[OwnPropertyKeys]]().
  3. Let nameList be a new empty List.
  4. For each element nextKey of keys in List order, do
    a. If Type(nextKey) is Symbol and type is symbol or Type(nextKey) is String and type is string, then
      i. Append nextKey as the last element of nameList.
  5. Return CreateArrayFromList(nameList).

  [[OwnPropertyKeys]] ( )

  1. Return ! OrdinaryOwnPropertyKeys(O).

  OrdinaryOwnPropertyKeys ( O )

  1. Let keys be a new empty List.
  2. For each own property key P of O such that P is an array index, in ascending numeric index order, do
    a. Add P as the last element of keys.
  3. For each own property key P of O such that Type(P) is String and P is not an array index, in ascending chronological order of property creation, do
    a. Add P as the last element of keys.
  4. For each own property key P of O such that Type(P) is Symbol, in ascending chronological order of property creation, do
    a. Add P as the last element of keys.
  5. Return keys.
includes: [compareArray.js]
features: [Symbol]
---*/

var sym1 = Symbol();
var sym2 = Symbol();
class C {
  static a() { return 'A'; }
  static [sym1]() { return 'B'; }
  static c() { return 'C'; }
  static [sym2]() { return 'D'; }
}
assert.sameValue(C.a(), 'A', "`C.a()` returns `'A'`. Defined as `static a() { return 'A'; }`");
assert.sameValue(C[sym1](), 'B', "`C[sym1]()` returns `'B'`. Defined as `static [sym1]() { return 'B'; }`");
assert.sameValue(C.c(), 'C', "`C.c()` returns `'C'`. Defined as `static c() { return 'C'; }`");
assert.sameValue(C[sym2](), 'D', "`C[sym2]()` returns `'D'`. Defined as `static [sym2]() { return 'D'; }`");
assert.compareArray(
  Object.keys(C),
  []
);

