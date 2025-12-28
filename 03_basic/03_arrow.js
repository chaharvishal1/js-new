const user = {
    name : "VishaL",
    price : 999,
    welcomeMess : function () {
        console.log(`Name is ${this.name} and age is ${this.price}`);
        console.log(this);
    }
}

user.welcomeMess();

// user.name ="Charli"
// user.price = 9999
// user.welcomeMess()


// function code() {
//     const URL = "xyz.com"
//     console.log(this.URL);
// }


const code = () => {
    const URL = "xyz.com"
    console.log(this);
}

code();


// const sumOne = (a, b) => {
//     return a + b
// }

// const sumOne = (a, b) => a + b

// const sumOne = (a, b) => (a + b)

const sumOne = (a, b) => ({username: "ABC"})

console.log(sumOne(2, 4));
