var emp = {
  id: 101,
  name: "Amar",
  salary: 35000,
};

var address = {
  street: "Ameerpet",
  city: "Hyd",
  state: "TG",
};

var empDetails = { ...emp, ...address };
console.log(empDetails);
