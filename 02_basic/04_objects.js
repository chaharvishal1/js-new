// const obje = new Object()

const tinderUser = {}

tinderUser.id = "123bc"
tinderUser.name = "vishal"
tinderUser.Logged = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



const regularUser = {
    email: "chaharvishal",
    fullname : {
        userName : {
            firstName: "rao",
            secondName: "indra"
        } 
    }
}

// console.log(regularUser.fullname.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {4: "e", 5: "f"}

// const obj = {obj1, obj2}
// const obj = Object.assign({}, obj1, obj2)
// const obj = {...obj1, ...obj2, ...obj3}

// console.log(obj);

const sample = [
    {
        id: "1",
        name: "extra"
    },
    {
        id: "2",
        name: "large"
    },
    {
        id : "3",
        name: "extra large"
    }
]

// console.log(sample[1].name);


const course = {
    courseName: "btech",
    courseTenure: "five years",
    courseBranch: "computer"
}

// const {courseBranch} = course
// console.log(courseBranch);

const {courseBranch: branch} = course
console.log(branch);

