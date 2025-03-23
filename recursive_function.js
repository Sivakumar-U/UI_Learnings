// Recursive function: A function calling itself is called recursive function.

function print(a) {
  console.log(a);
  if (a > 0) {
    print(a - 1);
  }
  console.log(a);
}
print(3);
