console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(() => {
  console.log("Call me ASAP");
}, 0);  // 0 millisecond after Call Stack is empty 

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a,b);
console.log(c);

/*
setTimeout is a Asyncronous Function so it will be registered to libuv and it will only we pushed into Call Stack when it will be empty and then get executed.
*/