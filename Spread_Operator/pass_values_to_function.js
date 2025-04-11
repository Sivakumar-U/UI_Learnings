function add(a, b, c, d) {
  var res = a + b + c + d;
  console.log(res);
}
var nums = [2, 3, 4, 5];
add(...nums); // here, we are passing values to add function
