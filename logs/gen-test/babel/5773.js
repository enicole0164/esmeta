"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define; define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(x);

function x(x) {
  return _regeneratorRuntime().wrap(function x$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
(()=>{
// hidden constructors
let AsyncArrowFunction = Object.getPrototypeOf(async () => {}).constructor;
let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
let AsyncGeneratorFunction = Object.getPrototypeOf(
  async function* () {}
).constructor;
let GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;

// logging errors
let $error = (globalThis.console && globalThis.console.log) || globalThis.print;

// conversion to string
let $toString = (value) => {
  if (value === 0 && 1 / value === -Infinity) return "«-0»";
  if (value instanceof Error) return "a " + value.constructor.name;
  if (value === AsyncFunction.prototype) return "the async function prototype"
  if (value === AsyncGeneratorFunction.prototype) return "the async generator function prototype"
  if (value === GeneratorFunction.prototype) return "the generator function prototype"
  if (value === AsyncArrowFunction.prototype) return "the async arrow function prototype"
  if (value === Object.prototype) return "the object prototype"
  if (typeof value === "string") return '"' + value + '"';
  if (typeof value === "function") return "[object Function]";
  if (typeof value === "object") return "[object Object]";
  return String(value);
}

// wrapper of Object.getPrototpyeOf
let $Object_getPrototypeOf = (o) => {
  if (o === null || o === undefined) {
    return undefined;
  }
  return Object.getPrototypeOf(o);
}

// wrapper of Reflect.ownKeys
let $Reflect_ownKeys = (o) => {
  if (o === null || o === undefined) {
    return undefined;
  }
  return Reflect.ownKeys(o);
}

let $isSameValue = (x, y) => {
  if (x === y) return x !== 0 || 1 / x === 1 / y;
  return x !== x && y !== y;
}

// assertion
let $assert = (mustBeTrue) => {
  if (mustBeTrue === true) return;
  $error("Expected true but got " + $toString(mustBeTrue));
}

// assertion for same values
$assert.sameValue = function (actual, expected) {
  if ($isSameValue(actual, expected)) return;
  $error(
    "Expected " + $toString(expected) + " but got " + $toString(actual) + "."
  );
};

// assertion for same values
$assert.notSameValue = function (actual, unexpected) {
  if (!$isSameValue(actual, unexpected)) return;
  $error(
    "Not expected " +
      $toString(unexpected) +
      " but got " +
      $toString(actual) +
      "."
  );
};

// assertion for [[Call]]
$assert.isCallable = function (f) {
  return typeof f === "function";
};
$assert.callable = function (f) {
  if (!$assert.isCallable(f))
    $error("Expected " + $toString(f) + " has [[Call]] but does not.");
};
$assert.notCallable = function (f) {
  if ($assert.isCallable(f))
    $error("Expected " + $toString(f) + " does not have [[Call]] but does.");
};

// assertion for [[Construct]]
$assert.isConstructable = function (f) {
  try {
    Reflect.construct(function () {}, [], f);
    return true;
  } catch (e) {
    return false;
  }
};
$assert.constructable = function (f) {
  if (!$assert.isConstructable(f))
    $error("Expected " + $toString(f) + " has [[Construct]] but does not.");
};
$assert.notConstructable = function (f) {
  if ($assert.isConstructable(f))
    $error(
      "Expected " + $toString(f) + " does not have [[Construct]] but does."
    );
};

// assertion to compare arrays
let $compareArray = (a, b) => {
  if (b.length !== a.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (!$isSameValue(a[i], b[i])) return false;
  }
  return true;
}

$assert.compareArray = function (actual, expected, obj) {
  function format(array) {
    return "[" + array.map($toString).join(", ") + "]";
  }
  function getObjDesc(obj) {
    var ty = Object.prototype.toString.call(obj);
    return ty.substring("[object ".length, ty.length - "]".length);
  }

  if (!Array.isArray(actual)) {
    $error(
      "$assert.compareArray requires an array as the first argument but " +
        $toString(actual) +
        " given."
    );
    return;
  }
  if (!Array.isArray(expected)) {
    $error(
      "$assert.compareArray requires an array as the second argument but " +
        $toString(expected) +
        " given."
    );
    return;
  }

  if ($compareArray(actual, expected)) return;
  $error(
    "Expected " +
      format(expected) +
      " but got " +
      format(actual) +
      " for " +
      getObjDesc(obj) +
      "."
  );
};

// assertion to compare iterators
$assert.compareIterator = function (iter, validators) {
  var i, result;
  for (i = 0; i < validators.length; i++) {
    result = iter.next();
    $error(
      !result.done,
      "Expected " +
        i +
        " values(s). Instead iterator only produced " +
        (i - 1) +
        " value(s)."
    );
    validators[i](result.value);
  }
  result = iter.next();
  $error(
    result.done,
    "Expected only " + i + " values(s). Instead iterator produced more."
  );
  $assert.sameValue(
    result.value,
    undefined,
    "Expected value of `undefined` when iterator completes."
  );
};

// verify properties
let $verifyProperty = (obj, prop, desc) => {
  // check object
  if (obj === undefined || obj === null) {
    $error(
      "$verifyProperty requires an object but " +
        $toString(obj) +
        " given."
    );
    return;
  }

  // check property type
  var propType = typeof prop;
  if (propType !== "string" && propType !== "symbol") {
    $error(
      "$verifyProperty requires a string or symbol property but " +
        $toString(prop) +
        " given."
    );
    return;
  }

  var originalDesc = Object.getOwnPropertyDescriptor(obj, prop);

  // Allows checking for undefined descriptor if it's explicitly given.
  if (desc === undefined) {
    $assert.sameValue(originalDesc, undefined);
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (!hasOwnProperty.call(obj, prop)) {
    $error($toString(obj) + " does not have own property named " + $toString(prop));
    return;
  }
  $assert.notSameValue(desc, null);
  $assert.sameValue(typeof desc, "object");

  function check(name) {
    try {
      if (!hasOwnProperty.call(desc, name)) return;
      if ($isSameValue(desc[name], originalDesc[name])) return;
      var message;
      if (name === "value")
        message =
          "descriptor value of " + $toString(prop) + " should be " +
          $toString(desc.value) +
          " but " +
          $toString(originalDesc.value);
      else
        message =
          "descriptor should " + (desc[name] ? "" : "not ") + "be " + name;
      $error(message);
    } catch (e) {}
  }
  check("value");
  check("writable");
  check("enumerable");
  check("configurable");
}

// delay checking assertions in JS runtime environment
// (supported: Node, QuickJs)
// or wait for 10 microtasks in JS Engine
// (might be broken if there are more than 10 awaits in program, etc.)
let $delay = (f) => {
  var setTimeout = globalThis.setTimeout;
  import("os")
    .then((os) => {
      // qjs
      setTimeout ??= os?.setTimeout;
    })
    .catch(() => {})
    .then(() => {
      let p;
      if(setTimeout)
        p = new Promise(resolve => setTimeout(resolve, 0))
      else {
        p = Promise.resolve();
        // delay 10 times
        for(var i = 0; i < 10; i++)
          p = p.then(() => {});
      }
      p.then(f).catch(()=>$error("An exception occured while checking assertions"));
    });
}

$delay(() => {
// [EXIT] normal
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]), GeneratorFunction.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]), true);
$assert.callable(globalThis["x"]);
$assert.notConstructable(globalThis["x"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]), ['length', 'name', 'prototype'], globalThis["x"]);
$assert.sameValue($Object_getPrototypeOf(globalThis["x"]?.["prototype"]), GeneratorFunction.prototype.prototype);
$assert.sameValue(Object.isExtensible(globalThis["x"]?.["prototype"]), true);
$assert.notCallable(globalThis["x"]?.["prototype"]);
$assert.notConstructable(globalThis["x"]?.["prototype"]);
$assert.compareArray($Reflect_ownKeys(globalThis["x"]?.["prototype"]), [], globalThis["x"]?.["prototype"]);
$verifyProperty(globalThis["x"], "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
$verifyProperty(globalThis["x"], "name", {
  value: "x",
  writable: false,
  enumerable: false,
  configurable: true,
});
$verifyProperty(globalThis["x"], "length", {
  value: 1.0,
  writable: false,
  enumerable: false,
  configurable: true,
});

});
})();