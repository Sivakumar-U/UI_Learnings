// Closure function: A closure function is a function that remembers the variables from its outer function even after the outer function has finished executing.
// Closure Functions are used when we want to maintain private data inside a function and use it later.

function outer() {
  var count = 0; // Local variable inside outer()
  return function inner() {
    // Inner function (closure)
    count++;
    console.log(count);
  };
}

var counter = outer(); // `outer()` returns `inner()`
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
