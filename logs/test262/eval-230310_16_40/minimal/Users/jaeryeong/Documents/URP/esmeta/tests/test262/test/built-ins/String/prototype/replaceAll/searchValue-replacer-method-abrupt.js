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

// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  Return abrupt completion from GetMethod(searchValue.@@replace)
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  1. Let O be RequireObjectCoercible(this value).
  2. If searchValue is neither undefined nor null, then
    a. Let isRegExp be ? IsRegExp(searchString).
    b. If isRegExp is true, then
      i. Let flags be ? Get(searchValue, "flags").
      ii. Perform ? RequireObjectCoercible(flags).
      iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
    c. Let replacer be ? GetMethod(searchValue, @@replace).
  ...

  GetMethod ( V, P )

  ...
  2. Let func be ? GetV(V, P).
  3. If func is either undefined or null, return undefined.
  4. If IsCallable(func) is false, throw a TypeError exception.
  5. Return func. 
features: [String.prototype.replaceAll, Symbol, Symbol.match, Symbol.replace]
---*/

var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  },
};

var searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  get [Symbol.replace]() {
    throw new Test262Error();
  },
};

assert.throws(Test262Error, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, 'custom abrupt');

searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: {},
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

assert.throws(TypeError, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, '@@replace is an object (not callable)');

searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: '',
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

assert.throws(TypeError, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, '@@replace is a string');

searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: 42,
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

assert.throws(TypeError, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, '@@replace is a number');

searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: Symbol(),
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

assert.throws(TypeError, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, '@@replace is a symbol');

searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: true,
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

assert.throws(TypeError, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, '@@replace is true');

searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: false,
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

assert.throws(TypeError, function() {
  ''.replaceAll.call(poison, searchValue, poison);
}, '@@replace is false');

assert.sameValue(poisoned, 0);

