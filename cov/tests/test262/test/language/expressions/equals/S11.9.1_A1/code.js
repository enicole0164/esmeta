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
info: |
    White Space and Line Terminator between EqualityExpression and "==" or
    between "==" and RelationalExpression are allowed
es5id: 11.9.1_A1
description: Checking by using eval
---*/

//CHECK#1
if (eval("true\u0009==\u00091") !== true) {
  throw new Test262Error('#1: (true\\u0009==\\u00091) === true');
}

//CHECK#2
if (eval("true\u000B==\u000B1") !== true) {
  throw new Test262Error('#2: (true\\u000B==\\u000B1) === true');  
}

//CHECK#3
if (eval("true\u000C==\u000C1") !== true) {
  throw new Test262Error('#3: (true\\u000C==\\u000C1) === true');
}

//CHECK#4
if (eval("true\u0020==\u00201") !== true) {
  throw new Test262Error('#4: (true\\u0020==\\u00201) === true');
}

//CHECK#5
if (eval("true\u00A0==\u00A01") !== true) {
  throw new Test262Error('#5: (true\\u00A0==\\u00A01) === true');
}

//CHECK#6
if (eval("true\u000A==\u000A1") !== true) {
  throw new Test262Error('#6: (true\\u000A==\\u000A1) === true');  
}

//CHECK#7
if (eval("true\u000D==\u000D1") !== true) {
  throw new Test262Error('#7: (true\\u000D==\\u000D1) === true');
}

//CHECK#8
if (eval("true\u2028==\u20281") !== true) {
  throw new Test262Error('#8: (true\\u2028==\\u20281) === true');
}

//CHECK#9
if (eval("true\u2029==\u20291") !== true) {
  throw new Test262Error('#9: (true\\u2029==\\u20291) === true');
}

//CHECK#10
if (eval("true\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029==\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20291") !== true) {
  throw new Test262Error('#10: (true\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029==\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === true');
}

