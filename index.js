const { add, helloWorld } = require('./lib/node_rust_napi_example.node');

const result = add(10, 20);
console.log(`add: ${result}`);

const hello_wrold = helloWorld();
console.log(`${hello_wrold}`);