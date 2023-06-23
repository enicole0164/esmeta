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
    The pop function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.pop
description: >
    Operator use ToNumber from length.  If Type(value) is Object,
    evaluate ToPrimitive(value, Number)
---*/

var obj = {};
obj.pop = Array.prototype.pop;

obj[0] = -1;
obj.length = {
  valueOf() {
    return 1
  }
};
var pop = obj.pop();
assert.sameValue(pop, -1, 'The value of pop is expected to be -1');

obj[0] = -1;
obj.length = {
  valueOf() {
    return 1
  },
  toString() {
    return 0
  }
};
var pop = obj.pop();
assert.sameValue(pop, -1, 'The value of pop is expected to be -1');

obj[0] = -1;
obj.length = {
  valueOf() {
    return 1
  },
  toString() {
    return {}
  }
};
var pop = obj.pop();
assert.sameValue(pop, -1, 'The value of pop is expected to be -1');

try {
  obj[0] = -1;
  obj.length = {
    valueOf() {
      return 1
    },
    toString() {
      throw "error"
    }
  };
  var pop = obj.pop();
  assert.sameValue(pop, -1, 'The value of pop is expected to be -1');
}
catch (e) {
  assert.notSameValue(e, "error", 'The value of e is not "error"');
}

obj[0] = -1;
obj.length = {
  toString() {
    return 0
  }
};
var pop = obj.pop();
assert.sameValue(pop, undefined, 'The value of pop is expected to equal undefined');

obj[0] = -1;
obj.length = {
  valueOf() {
    return {}
  },
  toString() {
    return 0
  }
}
var pop = obj.pop();
assert.sameValue(pop, undefined, 'The value of pop is expected to equal undefined');

try {
  obj[0] = -1;
  obj.length = {
    valueOf() {
      throw "error"
    },
    toString() {
      return 0
    }
  };
  var pop = obj.pop();
  throw new Test262Error('#7.1: obj[0] = -1; obj.length = {valueOf() {throw "error"}, toString() {return 0}}; obj.pop() throw "error". Actual: ' + (pop));
}
catch (e) {
  assert.sameValue(e, "error", 'The value of e is expected to be "error"');
}

try {
  obj[0] = -1;
  obj.length = {
    valueOf() {
      return {}
    },
    toString() {
      return {}
    }
  };
  var pop = obj.pop();
  throw new Test262Error('#8.1: obj[0] = -1; obj.length = {valueOf() {return {}}, toString() {return {}}}  obj.pop() throw TypeError. Actual: ' + (pop));
}
catch (e) {
  assert.sameValue(
    e instanceof TypeError,
    true,
    'The result of evaluating (e instanceof TypeError) is expected to be true'
  );
}

