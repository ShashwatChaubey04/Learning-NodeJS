function x() {

  const a = 10;

  function b() {
    console.log('b');
  }

}

console.log(a);     // You can't access a variable that is defined inside the Function outside that Function.