# Node.js + Rust Napi Examples

이 리포지토리는 필자의 Rust 학습 내용을 기록한 리포지토리 입니다.

## 설명

Node.js에서 Rust로 작성된 함수를 호출하려면 FFI(Foreign Function Interface)를 사용해야 합니다.
Node.js에서 Rust로 작성된 코드를 사용하려면 Rust 코드를 컴파일하고 Node.js에서 호출할 수 있는 방식으로 래핑해야 합니다.
일반적으로 neon 또는 napi-rs와 같은 라이브러리를 사용하여 Rust 코드를 Node.js에 통합할 수 있습니다.

### 실행 방법

1. 프로젝트 디렉토리로 이동합니다.
2. 아래 명령어를 실행합니다:
```sh
cargo build --release
```
3. 빌드가 완료되면 ./target/release 폴더로 이동합니다.
4. Windows에서는 파일이 `node_rust-napi_example.dll`로, macOS에서는 `node_rust-napi_example.dylib`로, Linux에서는 `node_rust-napi_example.so`로 컴파일됩니다.
5. 파일 확장자를 `.node`로 변경합니다.
6. 이후 원하는 디렉토리에 .node 파일을 배치하고 Node.js에서 import 합니다.
7. 함수를 가져온 후, Node.js에서 실행합니다:
```sh
node index.js
```

### 결과 예시
```sh
$ node index.js
add: 30
Hello, World!
```

## 참고 문서
* [NAPI-RS Home - Rustify Node.js in few lines!](https://napi.rs/)