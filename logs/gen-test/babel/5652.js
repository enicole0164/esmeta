// [EXIT] throw-error: ReferenceError(GetValue ((step 3, 4:57-92))<SYNTAX>:PropertyDefinition[0,0].PropertyDefinitionEvaluation)
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty.call(_defineProperty({
  x: x
}, "x", x), 0, 0);