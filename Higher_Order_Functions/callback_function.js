// Callback function: A callback function is a function that is passed as an argument to another function and gets executed later.
// Callback Functions are used when we want to execute a function after another task completes.

function execute(callback) {
  console.log("executing function....");
  callback();
}
function test() {
  console.log("testing callback.....");
}
execute(test);
