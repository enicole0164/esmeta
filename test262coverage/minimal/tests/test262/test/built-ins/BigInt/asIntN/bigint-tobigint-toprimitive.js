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

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: BigInt.asIntN type coercion for bigint parameter
esid: pending
info: |
  BigInt.asIntN ( bits, bigint )

  2. Let bigint ? ToBigInt(bigint).
features: [BigInt, computed-property-names, Symbol, Symbol.toPrimitive]
---*/
assert.sameValue(typeof BigInt, 'function');
assert.sameValue(typeof BigInt.asIntN, 'function');
function err() {
  throw new Test262Error();
}

function MyError() {}

assert.sameValue(BigInt.asIntN(2, {
  [Symbol.toPrimitive]: function() {
    return "1";
  },
  valueOf: err,
  toString: err
}), 1n, "ToPrimitive: @@toPrimitive takes precedence");
assert.sameValue(BigInt.asIntN(2, {
  valueOf: function() {
    return "1";
  },
  toString: err
}), 1n, "ToPrimitive: valueOf takes precedence over toString");
assert.sameValue(BigInt.asIntN(2, {
  toString: function() {
    return "1";
  }
}), 1n, "ToPrimitive: toString with no valueOf");
assert.sameValue(BigInt.asIntN(2, {
  [Symbol.toPrimitive]: undefined,
  valueOf: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip @@toPrimitive when it's undefined");
assert.sameValue(BigInt.asIntN(2, {
  [Symbol.toPrimitive]: null,
  valueOf: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip @@toPrimitive when it's null");
assert.sameValue(BigInt.asIntN(2, {
  valueOf: null,
  toString: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asIntN(2, {
  valueOf: 1,
  toString: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asIntN(2, {
  valueOf: {},
  toString: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it's not callable");
assert.sameValue(BigInt.asIntN(2, {
  valueOf: function() {
    return {};
  },
  toString: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it returns an object");
assert.sameValue(BigInt.asIntN(2, {
  valueOf: function() {
    return Object(12345);
  },
  toString: function() {
    return "1";
  }
}), 1n, "ToPrimitive: skip valueOf when it returns an object");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    [Symbol.toPrimitive]: 1
  });
}, "ToPrimitive: throw when @@toPrimitive is not callable");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    [Symbol.toPrimitive]: {}
  });
}, "ToPrimitive: throw when @@toPrimitive is not callable");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    [Symbol.toPrimitive]: function() {
      return Object(1);
    }
  });
}, "ToPrimitive: throw when @@toPrimitive returns an object");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    [Symbol.toPrimitive]: function() {
      return {};
    }
  });
}, "ToPrimitive: throw when @@toPrimitive returns an object");
assert.throws(MyError, function() {
  BigInt.asIntN(0, {
    [Symbol.toPrimitive]: function() {
      throw new MyError();
    }
  });
}, "ToPrimitive: propagate errors from @@toPrimitive");
assert.throws(MyError, function() {
  BigInt.asIntN(0, {
    valueOf: function() {
      throw new MyError();
    }
  });
}, "ToPrimitive: propagate errors from valueOf");
assert.throws(MyError, function() {
  BigInt.asIntN(0, {
    toString: function() {
      throw new MyError();
    }
  });
}, "ToPrimitive: propagate errors from toString");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    valueOf: null,
    toString: null
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    valueOf: 1,
    toString: 1
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    valueOf: {},
    toString: {}
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    valueOf: function() {
      return Object(1);
    },
    toString: function() {
      return Object(1);
    }
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
assert.throws(TypeError, function() {
  BigInt.asIntN(0, {
    valueOf: function() {
      return {};
    },
    toString: function() {
      return {};
    }
  });
}, "ToPrimitive: throw when skipping both valueOf and toString");
