class Test {
  fun = () => console.log("fun..");
}

var obj = new Test();
obj.fun(); // calling same method multiple times we can do like below.
obj.fun();
obj.fun();

new Test().fun(); // to call method for single time we can use like this.
