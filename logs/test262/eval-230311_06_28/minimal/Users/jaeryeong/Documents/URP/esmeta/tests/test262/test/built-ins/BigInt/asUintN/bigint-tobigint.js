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
description: BigInt.asUintN type coercion for bigint parameter
esid: pending
info: |
  BigInt.asUintN ( bits, bigint )

  2. Let bigint ? ToBigInt(bigint).
features: [BigInt]
---*/

assert.sameValue(BigInt.asUintN(2, 0n), 0n);
assert.sameValue(BigInt.asUintN(2, -0n), 0n);
assert.sameValue(BigInt.asUintN(2, false), 0n, "ToBigInt: false => 0n");
assert.sameValue(BigInt.asUintN(2, true), 1n, "ToBigInt: true => 1n");
assert.sameValue(BigInt.asUintN(2, "1"), 1n, "ToBigInt: parse BigInt");
assert.sameValue(BigInt.asUintN(2, "-0"), 0n, "ToBigInt: parse BigInt");
assert.sameValue(BigInt.asUintN(2, ""), 0n, "ToBigInt: empty String => 0n");
assert.sameValue(BigInt.asUintN(2, "     "), 0n, "ToBigInt: String with only whitespace => 0n");
assert.sameValue(BigInt.asUintN(2, []), 0n, "ToBigInt: .toString() => empty String => 0n");
assert.sameValue(BigInt.asUintN(2, [1]), 1n, "ToBigInt: .toString() => parse BigInt");
assert.sameValue(BigInt.asUintN(3, 10n), 2n);
assert.sameValue(BigInt.asUintN(3, "10"), 2n, "ToBigInt: parse BigInt");
assert.sameValue(BigInt.asUintN(3, "0b1010"), 2n, "ToBigInt: parse BigInt binary");
assert.sameValue(BigInt.asUintN(3, "0o12"), 2n, "ToBigInt: parse BigInt octal");
assert.sameValue(BigInt.asUintN(3, "0xa"), 2n, "ToBigInt: parse BigInt hex");
assert.sameValue(BigInt.asUintN(3, "    0xa    "), 2n,
  "ToBigInt: parse BigInt ignore leading/trailing whitespace");
assert.sameValue(BigInt.asUintN(3, "     10     "), 2n,
  "ToBigInt: parse BigInt ignore leading/trailing whitespace");
assert.sameValue(BigInt.asUintN(3, [10n]), 2n, "ToBigInt: .toString() => parse BigInt");
assert.sameValue(BigInt.asUintN(3, ["10"]), 2n, "ToBigInt: .toString() => parse BigInt");
assert.sameValue(BigInt.asUintN(4, 12345678901234567890003n), 3n);
assert.sameValue(BigInt.asUintN(4, "12345678901234567890003"), 3n, "ToBigInt: parse BigInt");
assert.sameValue(BigInt.asUintN(4,
    "0b10100111010100001010110110010011100111011001110001010000100100010001010011"), 3n,
  "ToBigInt: parse BigInt binary");
assert.sameValue(BigInt.asUintN(4, "0o2472412662347316120442123"), 3n,
  "ToBigInt: parse BigInt octal");
assert.sameValue(BigInt.asUintN(4, "0x29d42b64e7671424453"), 3n, "ToBigInt: parse BigInt hex");
assert.sameValue(BigInt.asUintN(4, "    0x29d42b64e7671424453    "), 3n,
  "ToBigInt: parse BigInt ignore leading/trailing whitespace");
assert.sameValue(BigInt.asUintN(4, "     12345678901234567890003     "), 3n,
  "ToBigInt: parse BigInt ignore leading/trailing whitespace");
assert.sameValue(BigInt.asUintN(4, [12345678901234567890003n]), 3n,
  "ToBigInt: .toString() => parse BigInt");
assert.sameValue(BigInt.asUintN(4, ["12345678901234567890003"]), 3n,
  "ToBigInt: .toString() => parse BigInt");

