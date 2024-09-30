# Node.js + Rust Napi Examples

Example code for combining Node.js and Rust via napi-rs.

This repository is intended to be a learning log for Rust.

## Description

To call a function written in Rust from Node.js, you need to use FFI (Foreign Function Interface). In order to use code written in Rust in Node.js, you need to compile the Rust code and wrap it in a way that can be called from Node.js. Usually, you can integrate Rust code into Node.js using a library such as neon or napi-rs.

### Run

1. Go to the project directory.
2. Run the command below:
```sh
cargo build --release
```
3. Once the build is complete, navigate to the ./target/release folder.
4. On Windows, the file will be compiled as `node_rust-napi_example.dll`, on macOS as `node_rust-napi_example.dylib`, and on `Linux as node_rust-napi_example.so`.
5. Change the file extension to `.node`.
6. After changing the extension of the file to .node, place it in the desired directory and import it in Node.js.
7. After importing the function, run it in Node.js:
```sh
node index.js
```

### Example Results
```sh
$ node index.js
add: 30
Hello, World!
```

## Reference
* [NAPI-RS Home - Rustify Node.js in few lines!](https://napi.rs/)