class User {
    constructor(username, eamil){
        this.username = username,
        this.email = this.email
    }

    logMe() {
        return `Mr. ${this.username} has been loged.`
    }

    static createId(){
        return `123`
    }
}

const descord = new User('raj12', 'raj12@gmail.com')

// console.log(descord.logMe());

class Teacher extends User{
    constructor(username, password){
        super(username)
        this.password = password
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());