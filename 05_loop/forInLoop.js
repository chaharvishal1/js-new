
// for...in loop is used to iterate over the enumerable properties of an object.


const language = {
    JS: "Javascript",
    PY: "Python",
    JA: "Java",
    CPP: "C++",
    RB: "Ruby",
}

for (const key in language) {
//   console.log(`Key is ${key} and Value is ${language[key]}`);
}



const coding = ["Javascript", "Python", "Java", "C++", "Ruby"];

for (const index in coding) {
//   console.log(`Index is ${index} and Value is ${coding[index]}`);
}


const myMap = new Map();
myMap.set("IN", "India");
myMap.set("US", "United States");
myMap.set("UK", "United Kingdom");
myMap.set("AU", "Australia");
myMap.set("CA", "Canada");

for(const key in myMap) {
    console.log(`Key is ${key} and Value is ${myMap[key]}`);
}