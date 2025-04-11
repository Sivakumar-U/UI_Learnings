class Operations {
  static add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

var res = Operations.add(5, 6);
console.log(res);

var obj = new Operations();
console.log(obj.multiply(5, 6));
