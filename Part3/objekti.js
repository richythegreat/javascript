
let person = {
    name: "Jānis",
    age: 20,
    isStudent: true
};

let prop = "age"

console.log(person.name);
console.log(person[prop]);

if (person.age >= 18) {
    console.log("Pilngadigs.");
} else {
    console.log("nepilngadigs.");
}

if (person.isStudent) {
    console.log("students.");
} else {
    console.log("nav students.");
}


person.course = "PT2022";

console.log(person);




