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
    Using "try" with "catch" or "finally" statement within/without a "while"
    statement
es5id: 12.14_A10_T3
description: Try statement inside loop, where use break
---*/

// CHECK#1
var c1=0,fin=0;
while(c1<2){
  try{
    c1+=1;
    break;
  }
  catch(er1){}
  finally{
    fin=1;
  }
  fin=-1;
  c1+=2;
}
if(fin!==1){
  throw new Test262Error('#1.1: "finally" block must be evaluated');
}
if(c1!==1){
  throw new Test262Error('#1.2: "try{break}catch finally" must work correctly');
}

// CHECK#2
var c2=0,fin2=0;
while(c2<2){
  try{
    throw "ex1";
  }
  catch(er1){
    c2+=1;
    break;
  }
  finally{
    fin2=1;
  }
  c2+=2;
  fin2=-1;
}
if(fin2!==1){
  throw new Test262Error('#2.1: "finally" block must be evaluated');
}
if(c2!==1){
  throw new Test262Error('#2.2: "try catch{break} finally" must work correctly');
}

// CHECK#3
var c3=0,fin3=0;
while(c3<2){
  try{
    throw "ex1";
  }
  catch(er1){
    c3+=1;
  }
  finally{
    fin3=1;
    break;
  }
  c3+=2;
  fin3=0;
}
if(fin3!==1){
  throw new Test262Error('#3.1: "finally" block must be evaluated');
}
if(c3!==1){
  throw new Test262Error('#3.2: "try catch finally{break}" must work correctly');
}

// CHECK#4
var c4=0,fin4=0;
while(c4<2){
  try{
    c4+=1;
    break;
  }
  finally{
    fin4=1;
  }
  fin4=-1;
  c4+=2;
}
if(fin4!==1){
  throw new Test262Error('#4.1: "finally" block must be evaluated');
}
if(c4!==1){
  throw new Test262Error('#4.2: "try{break} finally" must work correctly');
}

// CHECK#5
var c5=0;
while(c5<2){
  try{
    throw "ex1";
  }
  catch(er1){
    break;
  }
}
if(c5!==0){
  throw new Test262Error('#5: "try catch{break}" must work correctly');
}

// CHECK#6
var c6=0;
while(c6<2){
  try{
    c6+=1;
    break;
  }
  catch(er1){}
  c6+=2;
}
if(c6!==1){
  throw new Test262Error('#6: "try{break} catch" must work correctly');
}

// CHECK#7
var c7=0,fin7=0;
try{
  while(c7<2){
    try{
      c7+=1;
      throw "ex1";
    }
    finally{
      fin7=1;
      break;
    }
    fin7=-1;
    c7+=2;
  }
}
catch(ex1){
  c7=10;
}
if(fin7!==1){
  throw new Test262Error('#7.1: "finally" block must be evaluated');
}
if(c7!==1){
  throw new Test262Error('#7.2: "try finally{break}" must work correctly');
}

