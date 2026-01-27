function User(email, password){
    this._email = email,
    this.password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = email
        }
    })
}

const descord = new User('raj12@gmail.com', 'wdfvg422')

console.log(descord.email); 

