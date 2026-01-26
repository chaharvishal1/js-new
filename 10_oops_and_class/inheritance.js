class User{
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`User name is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password)
    {
        super(username)
        this.email = email,
        this.password = password
    }

    courseAdd(){
        console.log(`Course added successfully by ${this.username}`)
    }
}

const descord = new Teacher("Charli", "ch@xyz,com", "127devb")
descord.logMe()
descord.courseAdd()

const strike = new User("Executive")

strike.logMe()

console.log(descord instanceof User);

