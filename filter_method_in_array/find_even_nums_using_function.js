// If the logic is big to implement we can build that logic in a function and pass this function as a argument inside a filter() method.
var nums = [3, 7, 2, 8, 4, 5, 6];

function isEven(n) {
  if (n % 2 == 0) return true;
  else return false;
}

var evens = nums.filter(isEven);
console.log(evens);
