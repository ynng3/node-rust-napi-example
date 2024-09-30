use napi_derive::napi;

#[napi]
fn add(a: i32, b: i32) -> i32 {
  a + b
}

#[napi]
fn hello_world() -> String {
  "Hello, World!".to_string()
}