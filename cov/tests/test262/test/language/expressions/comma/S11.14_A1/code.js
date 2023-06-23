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
    White Space and Line Terminator between Expression and , or between , and
    AssignmentExpression are allowed
es5id: 11.14_A1
description: Checking by using eval
---*/

//CHECK#1
if ((eval("false\u0009,\u0009true")) !== true) {
  throw new Test262Error('#1: (false\\u0009,\\u0009true) === true');
}

//CHECK#2
if ((eval("false\u000B,\u000Btrue")) !== true) {
  throw new Test262Error('#2: (false\\u000B,\\u000Btrue) === true');  
}

//CHECK#3
if ((eval("false\u000C,\u000Ctrue")) !== true) {
  throw new Test262Error('#3: (false\\u000C,\\u000Ctrue) === true');
}

//CHECK#4
if ((eval("false\u0020,\u0020true")) !== true) {
  throw new Test262Error('#4: (false\\u0020,\\u0020true) === true');
}

//CHECK#5
if ((eval("false\u00A0,\u00A0true")) !== true) {
  throw new Test262Error('#5: (false\\u00A0,\\u00A0true) === true');
}

//CHECK#6
if ((eval("false\u000A,\u000Atrue")) !== true) {
  throw new Test262Error('#6: (false\\u000A,\\u000Atrue) === true');  
}

//CHECK#7
if ((eval("false\u000D,\u000Dtrue")) !== true) {
  throw new Test262Error('#7: (false\\u000D,\\u000Dtrue) === true');
}

//CHECK#8
if ((eval("false\u2028,\u2028true")) !== true) {
  throw new Test262Error('#8: (false\\u2028,\\u2028true) === true');
}

//CHECK#9
if ((eval("false\u2029,\u2029true")) !== true) {
  throw new Test262Error('#9: (false\\u2029,\\u2029true) === true');
}


//CHECK#10
if ((eval("false\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029,\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029true")) !== true) {
  throw new Test262Error('#10: (false\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029,\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029true) === true');
}

