// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// var p1 = new Person("Amar", 23);
// console.log(p1.name);
// console.log(p1.age);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  details() {
    console.log(`${this.name},${this.age}`);
  }
}

var p1 = new Person("Amar", 23);
var p2 = new Person("Annie", 21);
var p3 = new Person("Harin", 24);

p1.details();
p2.details();
p3.details();
