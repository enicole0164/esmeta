const fs = require('fs');
const readline = require('readline');
const esprima = require('esprima-next');
const estraverse = require('estraverse');
const astring = require('astring');

function process_js_code(js_code) {
  const ast = esprima.parseScript(js_code, { comment: true });

  // Remove comments
  ast.comments = [];

  let freshVarCounter = 0;

  // Transform assert statements
  estraverse.replace(ast, {
    enter: function (node, parent) {
      if (
        node.type === 'CallExpression' &&
        node.callee.type === 'MemberExpression' &&
        node.callee.object.type === 'Identifier' &&
        node.callee.object.name === 'assert'
      ) {
        const transformedNodes = node.arguments.map((arg) => {
          const freshVarName = `fresh_var${freshVarCounter++}`;
          return {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: freshVarName },
                init: arg,
              },
            ],
            kind: 'var',
          };
        });
        // console.log(node)

        return {
          type: 'BlockStatement',
          body: transformedNodes,
        };
      } if (
        node.type === 'CallExpression' &&
        node.callee.type === 'Identifier' &&
        (node.callee.name === 'assert' || node.callee.name === 'assertRelativeDateMs')
      ) {
        const transformedNodes = node.arguments.map((arg) => {
          const freshVarName = `fresh_var${freshVarCounter++}`;
          return {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: freshVarName },
                init: arg,
              },
            ],
            kind: 'var',
          };
        });
        // console.log(node)

        return {
          type: 'BlockStatement',
          body: transformedNodes,
        };
        // console.log(node)
      } else {
        // console.log(node)
      }
    },
  });

  // Generate new code from AST
  return astring.generate(ast);
}

const input_code = `
assertToStringOrNativeFunction(g, "set /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ a /* f */ ) /* g */ { /* h */ }");
`;


const processed_code = process_js_code(input_code);
console.log(processed_code);
