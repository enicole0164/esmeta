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


// Replace with the path to your text file
const filePathsFile = 'filename.txt';

// Create a readline interface for reading the text file
const rl = readline.createInterface({
  input: fs.createReadStream(filePathsFile),
  crlfDelay: Infinity
});

let errorCounter = 0;

var yet_array = ['/Users/jaeryeong/Documents/URP/esmeta/tests/test262/test/built-ins/Array/prototype/sort/call-with-primitive.js', 
                '/Users/jaeryeong/Documents/URP/esmeta/tests/test262/test/built-ins/Function/prototype/toString/AsyncFunction.js', 
                '/Users/jaeryeong/Documents/URP/esmeta/tests/test262/test/built-ins/RegExp/prototype/Symbol.replace/named-groups.js'];
var yet = new Set(yet_array);

// Read each line of the text file and iterate through the files
rl.on('line', (filePath) => {
  if (yet.has(filePath)) {
    console.log("ERRROR~")
  } else {
    // Read the file contents
    fs.readFile(filePath, 'utf8', (err, fileContents) => {
      if (err) {
        console.error(err);
      } else {
        // console.log(`File path: ${filePath}`);
        // console.log(`File contents: ${fileContents}`);
        try {
          const processed_code = process_js_code(fileContents)
          // console.log(processed_code)
          if (processed_code.includes("assert")) {
            throw new Error('Assertion still there!');
          }
        } catch (err) {
          errorCounter++;
          console.log(`Error filePath: ${filePath}`);
          console.log(err)
        }  
        // Do something with the file contents
        // console.log(`Error: ${errorCounter}`);
      }
    });
  } 
  // console.log(`Error: ${errorCounter}`);
});