let person = {
    name: "Renée",
    age: 34,
    evaluations: [7, 10, 9],
};
console.log(person.name);
console.log(person.age);

console.log(person ["name"]);
console.log(person ["age"]);

console.log(person.evaluations);

const newObject = {
    greeting: "hi ik ben een object",
}

const colors = ["groen", "blauw", "rood"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);

const count = colors.push("geel");
console.log(count);
console.log(colors);

const countNumber = colors.push(5);
console.log(colors);

const countObject = colors.push(newObject);
console.log(colors);

console.log(colors[colors.length - 1]);


