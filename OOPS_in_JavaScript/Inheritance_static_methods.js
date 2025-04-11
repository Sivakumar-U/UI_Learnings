class First {
  static m1() {
    console.log("First m1");
  }
}

class second extends First {
  static m2() {
    console.log("Second m2");
  }
}

second.m2();
second.m1();
