class First {
  m1() {
    console.log("First m1");
  }
}

class Second extends First {
  m2() {
    console.log("Second m2");
  }
}

var obj = new Second();
obj.m1();
obj.m2();
