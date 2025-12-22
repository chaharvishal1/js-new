// Object literals example

const mysym = Symbol("key1");

const jsUser = {
    name: "Vishal",
    [mysym]: "mykey1",
    "full name": "Vishal Chahar",
    age: 27,
    email: "chaharvishal1@mail.com",
    location: "Agra",
    IsLoggedUser: false,
}

// console.log(jsUser.email);
// console.log(jsUser["location"])
// console.log(jsUser["IsLoggedUser"])
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mysym]);

// jsUser.email = "visha@hotmail.com"
// console.log(jsUser)
// Object.freeze()
// jsUser.email = "vishal@star.com"


jsUser.greeting = function() {
    console.log("event1");
    
}

jsUser.greeting2 = function() {
    console.log("event2")
}

console.log(jsUser.greeting());

console.log(jsUser.greeting2());




