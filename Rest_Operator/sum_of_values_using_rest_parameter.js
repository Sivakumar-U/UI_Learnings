//Rest Parameter: It is used to pass any number of values to function.

function add(...nums) {
  var sum = 0;
  for (var num of nums) {
    sum = sum + num;
  }
  return sum;
}

var res = add(10, 20, 30, 40);
console.log(res);
