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
info: Nested "var-loops" nine blocks depth is evaluated properly
es5id: 12.6.3_A10
description: >
    Checking if executing nested "var-loops" nine blocks depth is
    evaluated properly
---*/

var __str, index0, index1, index2, index3, index4, index5, index6, index7, index8;

//////////////////////////////////////////////////////////////////////////////
//CHECK#
try {
	__in__deepest__loop=__in__deepest__loop;
} catch (e) {
	throw new Test262Error('#1: "__in__deepest__loop=__in__deepest__loop" does not lead to throwing exception');
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

for( index0=0; index0<=1; index0++) {
	for( index1=0; index1<=index0; index1++) {
		for( index2=0; index2<=index1; index2++) {
			for( index3=0; index3<=index2; index3++) {
				for( index4=0; index4<=index3; index4++) {
					for( index5=0; index5<=index4; index5++) {
						for( index6=0; index6<=index5; index6++) {
							for( index7=0; index7<=index6; index7++) {
								for( index8=0; index8<=index1; index8++) {
									var __in__deepest__loop;
									__str+=""+index0+index1+index2+index3+index4+index5+index6+index7+index8+'\n';
								}
							}
						}
					}
				}
			}
		}
	}
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str!== "000000000\n100000000\n110000000\n110000001\n111000000\n111000001\n111100000\n111100001\n111110000\n111110001\n111111000\n111111001\n111111100\n111111101\n111111110\n111111111\n") {
	throw new Test262Error('#2: __str === "000000000\\n100000000\\n110000000\\n110000001\\n111000000\\n111000001\\n111100000\\n111100001\\n111110000\\n111110001\\n111111000\\n111111001\\n111111100\\n111111101\\n111111110\\n111111111\\n". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

