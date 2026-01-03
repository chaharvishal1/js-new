
// for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.


const language = ["Javascript", "Python", "Java", "C++", "Ruby"];

for (const lang of language) {
//   console.log(lang);
}

const myMap = new Map();
myMap.set("JS", "Javascript");
myMap.set("PY", "Python");
myMap.set("JA", "Java");
myMap.set("CPP", "C++");
myMap.set("RB", "Ruby");

// for (const val of myMap) {
//   console.log(val);
// }

for (const [key, value] of myMap) {
//   console.log(`Key is ${key} and Value is ${value}`);
}

const myObj = {
    name: "John",
    age: 30,
    city: "New York",
};

for (const [key, value] of Object.entries(myObj)) {
    console.log(`Key is ${key} and Value is ${value}`);
}

