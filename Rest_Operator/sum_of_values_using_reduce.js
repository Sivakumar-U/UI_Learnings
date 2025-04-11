// Here, we used reduce method to sum the values which is Higher Order function.

function add(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
var res = add(10, 40, 30, 20);
console.log(res);
