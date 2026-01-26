// const user = {
//     username: "Charli",
//     loginCount: 9,
//     logInStatus: true,
//     insertData: function(){
//         // console.log(`${this.username} inserted in to database`);
//         console.log(this);
        
//     }
// }

// // console.log(user.username);
// console.log(user.insertData());
// // console.log(this);




function userDetails(username, age, count){
    this.username = username,
    this.age = age,
    this.count = count,
    this.greeting= function() {
        console.log(`${username} has been inserted successfully`);
        
    }
}

const userOne = new userDetails("kelvin", 20, false)
const userTwo = new userDetails("Pattrick", 26, true)
console.log(userOne);
console.log(userTwo);


