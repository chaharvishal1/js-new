class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}


const descord = new User('raj12', 'raj12@gmail.com', 'wdfvg422')

console.log(descord.email);
