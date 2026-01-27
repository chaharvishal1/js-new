const User = {
    _email : 'fhjs@ejdj.com',
    _password : '1def43245&',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const descord = Object.create(User)
console.log(descord.email);
