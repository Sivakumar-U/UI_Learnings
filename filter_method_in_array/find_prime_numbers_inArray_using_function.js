// If the logic is big to implement we can build that logic in a function and pass this function as a argument inside a filter() method.
var nums = [3, 7, 2, 8, 4, 5, 6];

function isPrime(n) {
  var count = 0;
  for (var i = 0; i <= n; i++) {
    if (n % i == 0) count++;
  }
  if (count == 2) return true;
  else return false;
}

var primes = nums.filter(isPrime);
console.log(primes);
