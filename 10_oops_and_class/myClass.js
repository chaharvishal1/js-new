class User {
    constructor(username, password){
        this.username= username,
        this.password = password
    }

    encriptPassword(){
        return `Your password is ${this.password}abababa`
    }

    transformUsername() {
        return `Your username is ${this.username.toUpperCase()}`
    }
}


const descord = new User("vishal@hotmail.com", "124ajfh4")
// console.log(descord.encriptPassword());
// console.log(descord.transformUsername());


// ----------------------------------------------------- Another way behind the class/constructor



function AnotherUser(username, password) {
    this.username = username,
    this.password = password
}

AnotherUser.prototype.encriptPass = function() {
    return `Your password is ${this.password}abababa`
}
AnotherUser.prototype.transformUsername = function() {
    return `Your username is ${this.username.toUpperCase()}`
}


const iceTea = new AnotherUser('Chairli@webmail', 'chow12jcoe4')

console.log(iceTea.transformUsername());




