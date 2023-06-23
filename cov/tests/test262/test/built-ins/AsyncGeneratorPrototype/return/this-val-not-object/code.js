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

// Copyright 2018 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asyncgenerator-prototype-return
description: return rejects promise when `this` value not an object
info: |
  AsyncGenerator.prototype.return ( value )
  1. Let generator be the this value.
  2. Let completion be Completion{[[Type]]: return, [[Value]]: value,
     [[Target]]: empty}.
  3. Return ! AsyncGeneratorEnqueue(generator, completion).

  AsyncGeneratorEnqueue ( generator, completion )
  ...
  3. If Type(generator) is not Object, or if generator does not have an
     [[AsyncGeneratorState]] internal slot, then
    a. Let badGeneratorError be a newly created TypeError object.
    b. Perform ! Call(promiseCapability.[[Reject]], undefined, « badGeneratorError »).
    c. Return promiseCapability.[[Promise]].

flags: [async]
features: [async-iteration]
---*/

async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;

var symbol = Symbol();

var testPromises = [
  AsyncGeneratorPrototype.return.call(undefined).then(
    function () {
      throw new Test262Error("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value `undefined`");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       throw new Test262Error("(undefined) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(1).then(
    function () {
      throw new Test262Error("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a Number");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       throw new Test262Error("(Number) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call("string").then(
    function () {
      throw new Test262Error("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a String");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       throw new Test262Error("(String) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(null).then(
    function () {
      throw new Test262Error("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value `null`");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       throw new Test262Error("(null) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(true).then(
    function () {
      throw new Test262Error("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a Boolean");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       throw new Test262Error("(Boolean) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(symbol).then(
    function () {
      throw new Test262Error("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a Symbol");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       throw new Test262Error("(Symbol) expected TypeError but got " + e);
      }
    }
  )
]

Promise.all(testPromises).then(() => {}).then($DONE, $DONE)

