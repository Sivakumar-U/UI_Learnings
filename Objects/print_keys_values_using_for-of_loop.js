var emp = { num: 1001, name: "Amar", salary: 35000 };
var keys = Object.keys(emp);
for (var key of keys) {
  console.log(key + ":" + emp[key]);
}
