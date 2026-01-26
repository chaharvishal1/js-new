function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 4

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);

function createUser(username, cost){
    this.username = username,
    this.cost = cost
}


createUser.prototype.userDispay = function () {
    return this.username
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.cost}`);
}

const chai = new createUser("Chai", 20)
const tea = new createUser("Tean", 80)

chai.printMe()

