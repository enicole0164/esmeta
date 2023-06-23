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
    Using "try" with "catch" or "finally" statement within/without a "switch"
    statement
es5id: 12.14_A15
description: Insert try/catch/finally to switch statement
---*/

// CHECK#1
function SwitchTest1(value){
  var result = 0;
  try{  
    switch(value) {
      case 1:
        result += 4;
        throw result;
        break;
      default:
        result += 32;
        break;
      case 4:
        result += 64;
        throw "ex";
    }
    return result;
  }
  catch(e){	
    if ((value===1)&&(e!==4)) throw new Test262Error('#1.1: Exception ===4. Actual:  Exception ==='+ e  );
    if ((value===4)&&(e!=="ex")) throw new Test262Error('#1.2: Exception ==="ex". Actual:  Exception ==='+ e  );
  }
  finally{
    return result;
  }
}
if (SwitchTest1(1)!==4) throw new Test262Error('#1.3: SwitchTest1(1)===4. Actual:  SwitchTest1(1)==='+ SwitchTest1(1) );
if (SwitchTest1(4)!==64) throw new Test262Error('#1.4: SwitchTest1(4)===64. Actual:  SwitchTest1(4)==='+ SwitchTest1(4) );

// CHECK#2
var c2=0;
function SwitchTest2(value){
  var result = 0;
  switch(value) {
    case 0:
      try{  
        result += 2;
        break;
      }
      finally{
        c2=1;
      }
    case 1:
      result += 4;
      break;
    default:
      result += 32;
      break;
  }
  return result;
}
if (SwitchTest2(1)!==4) throw new Test262Error('#2.1: SwitchTest1(1)===4. Actual:  SwitchTest1(1)==='+ SwitchTest1(1) );
if (c2===1) throw new Test262Error('#2.2: Evaluate finally block');
if (SwitchTest2(0)!==2) throw new Test262Error('#2.3: SwitchTest1(0)===2. Actual:  SwitchTest1(0)==='+ SwitchTest1(0) );
if (c2!==1) throw new Test262Error('#2.4: "finally" block must be evaluated');

// CHECK#3
function SwitchTest3(value){
  var result = 0;
  switch(value) {
    case 0:
      try{  
        result += 2;
        throw "ex";
      }
      finally{
        break;
      }
    default:
      result += 32;
      break;
  }
  return result;
}
try{
  var x3=SwitchTest3(0);
  if (x3!==2) throw new Test262Error('#3.1: x3===2. Actual: x3==='+x3);
}
catch(e){
  throw new Test262Error('#3.2: Catching exception inside function does not lead to throwing exception outside this function');
}

