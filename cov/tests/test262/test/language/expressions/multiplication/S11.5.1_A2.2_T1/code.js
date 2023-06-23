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
info: Operator x * y uses [[Default Value]]
es5id: 11.5.1_A2.2_T1
description: If Type(value) is Object, evaluate ToPrimitive(value, Number)
---*/

//CHECK#1
if ({valueOf: function() {return 1}} * 1 !== 1) {
  throw new Test262Error('#1: {valueOf: function() {return 1}} * 1 === 1. Actual: ' + ({valueOf: function() {return 1}} * 1));
}

//CHECK#2
if ({valueOf: function() {return 1}, toString: function() {return 0}} * 1 !== 1) {
  throw new Test262Error('#2: {valueOf: function() {return 1}, toString: function() {return 0}} * 1 === 1. Actual: ' + ({valueOf: function() {return 1}, toString: function() {return 0}} * 1));
}

//CHECK#3
if ({valueOf: function() {return 1}, toString: function() {return {}}} * 1 !== 1) {
  throw new Test262Error('#3: {valueOf: function() {return 1}, toString: function() {return {}}} * 1 === 1. Actual: ' + ({valueOf: function() {return 1}, toString: function() {return {}}} * 1));
}

//CHECK#4
try {
  if ({valueOf: function() {return 1}, toString: function() {throw "error"}} * 1 !== 1) {
    throw new Test262Error('#4.1: {valueOf: function() {return 1}, toString: function() {throw "error"}} * 1 === 1. Actual: ' + ({valueOf: function() {return 1}, toString: function() {throw "error"}} * 1));
  }
}
catch (e) {
  if (e === "error") {
    throw new Test262Error('#4.2: {valueOf: function() {return 1}, toString: function() {throw "error"}} * 1 not throw "error"');
  } else {
    throw new Test262Error('#4.3: {valueOf: function() {return 1}, toString: function() {throw "error"}} * 1 not throw Error. Actual: ' + (e));
  }
}

//CHECK#5
if (1 * {toString: function() {return 1}} !== 1) {
  throw new Test262Error('#5: 1 * {toString: function() {return 1}} === 1. Actual: ' + (1 * {toString: function() {return 1}}));
}

//CHECK#6
if (1 * {valueOf: function() {return {}}, toString: function() {return 1}} !== 1) {
  throw new Test262Error('#6: 1 * {valueOf: function() {return {}}, toString: function() {return 1}} === 1. Actual: ' + (1 * {valueOf: function() {return {}}, toString: function() {return 1}}));
}

//CHECK#7
try {
  1 * {valueOf: function() {throw "error"}, toString: function() {return 1}};
  throw new Test262Error('#7.1: 1 * {valueOf: function() {throw "error"}, toString: function() {return 1}} throw "error". Actual: ' + (1 * {valueOf: function() {throw "error"}, toString: function() {return 1}}));
}  
catch (e) {
  if (e !== "error") {
    throw new Test262Error('#7.2: 1 * {valueOf: function() {throw "error"}, toString: function() {return 1}} throw "error". Actual: ' + (e));
  } 
}

//CHECK#8
try {
  1 * {valueOf: function() {return {}}, toString: function() {return {}}};
  throw new Test262Error('#8.1: 1 * {valueOf: function() {return {}}, toString: function() {return {}}} throw TypeError. Actual: ' + (1 * {valueOf: function() {return {}}, toString: function() {return {}}}));
}  
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#8.2: 1 * {valueOf: function() {return {}}, toString: function() {return {}}} throw TypeError. Actual: ' + (e));
  } 
}

