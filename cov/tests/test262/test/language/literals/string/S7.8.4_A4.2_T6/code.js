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
info: "CharacterEscapeSequnce :: NonEscapeSequence"
es5id: 7.8.4_A4.2_T6
description: "NonEscapeSequence :: RUSSIAN CAPITAL ALPHABET"
---*/

//CHECK#А-Я

if ("А" !== "\А") {
  throw new Test262Error('#А');
}

if ("Б" !== "\Б") {
  throw new Test262Error('#Б');
}

if ("В" !== "\В") {
  throw new Test262Error('#В');
}

if ("Г" !== "\Г") {
  throw new Test262Error('#Г');
}

if ("Д" !== "\Д") {
  throw new Test262Error('#Д');
}

if ("Е" !== "\Е") {
  throw new Test262Error('#Е');
}

if ("Ж" !== "\Ж") {
  throw new Test262Error('#Ж');
}

if ("З" !== "\З") {
  throw new Test262Error('#З');
}

if ("И" !== "\И") {
  throw new Test262Error('#И');
}

if ("Й" !== "\Й") {
  throw new Test262Error('#Й');
}

if ("К" !== "\К") {
  throw new Test262Error('#К');
}

if ("Л" !== "\Л") {
  throw new Test262Error('#Л');
}

if ("М" !== "\М") {
  throw new Test262Error('#М');
}

if ("Н" !== "\Н") {
  throw new Test262Error('#Н');
}

if ("О" !== "\О") {
  throw new Test262Error('#О');
}

if ("П" !== "\П") {
  throw new Test262Error('#П');
}

if ("Р" !== "\Р") {
  throw new Test262Error('#Р');
}

if ("С" !== "\С") {
  throw new Test262Error('#С');
}

if ("Т" !== "\Т") {
  throw new Test262Error('#Т');
}

if ("У" !== "\У") {
  throw new Test262Error('#У');
}

if ("Ф" !== "\Ф") {
  throw new Test262Error('#Ф');
}

if ("Х" !== "\Х") {
  throw new Test262Error('#Х');
}

if ("Ц" !== "\Ц") {
  throw new Test262Error('#Ц');
}

if ("Ч" !== "\Ч") {
  throw new Test262Error('#Ч');
}

if ("Ш" !== "\Ш") {
  throw new Test262Error('#Ш');
}

if ("Щ" !== "\Щ") {
  throw new Test262Error('#Щ');
}

if ("Ъ" !== "\Ъ") {
  throw new Test262Error('#Ъ');
}

if ("Ы" !== "\Ы") {
  throw new Test262Error('#Ы');
}

if ("Ь" !== "\Ь") {
  throw new Test262Error('#Ь');
}

if ("Э" !== "\Э") {
  throw new Test262Error('#Э');
}

if ("Ю" !== "\Ю") {
  throw new Test262Error('#Ю');
}

if ("Я" !== "\Я") {
  throw new Test262Error('#Я');
}

if ("Ё" !== "\Ё") {
  throw new Test262Error('#Ё');
}

