var emp = { num: 1001, name: "Amar", salary: 35000 };
for (var [key, val] of Object.entries(emp)) {
  console.log(key + ":" + val);
}
