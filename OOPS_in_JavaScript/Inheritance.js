class Grand {
  m1() {
    console.log("Grand parent fun...");
  }
}

class Parent extends Grand {
  m2() {
    console.log("parent fun...");
  }
}

class Child extends Parent {
  m3() {
    console.log("Child fun...");
  }
}

var obj = new Child();
obj.m1();
obj.m2();
obj.m3();
