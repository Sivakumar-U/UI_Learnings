function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

var result = fact(4);
console.log(result);
