var cars = ["Saab", "Volvo", "BMW"];

var person_1 = { firstName: "John", lastName : "McNeil", age: 14};
var person_2 = { firstName: "Roman", lastName : "", age: 22};
var person_3 = { firstName: "Gilberto", lastName : "Santos", age: 46};
var person_4 = { firstName: "Nicolas", lastName : "Doe", age: 31};

var bus = [person_1, person_2, person_3, person_4];

console.log(bus);

var regina = bus[2];

console.log(regina.firstName);

var full_name = "gilberto";

console.log(full_name[3]);

console.log(full_name.replace("santos", "junior"));