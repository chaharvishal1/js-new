function setUserName(username){
    this.username = username
}

function createUser(username, email, age) {
    setUserName.call(this, username)
    this.email = email,
    this.age = age
} 


const user = new createUser("Airoman", "air@xyz.com", 27)

console.log(user);
