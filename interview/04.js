// #31 WAP for password validator, password contains one Uppercase and one lowercase letter atleast and one digit

const passwordValidator = (val) => {
    let hasUppercase = false
    let hasLowercase = false
    let hasDigit = false

    for (const ele of val) {
        if(ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 90){
            hasUppercase = true
        }
        else if(ele.charCodeAt(0) >= 97 && ele.charCodeAt(0) <= 122){
            hasLowercase = true
        }
        else if(ele.charCodeAt(0) >= 48 && ele.charCodeAt(0) <= 57){
            hasDigit = true
        }
    }
    if(!hasUppercase || !hasLowercase || !hasDigit || val.length < 8){
        console.log("Password is invalid");
        return false
    }
    console.log("Password validated successfully");
    return true
}

passwordValidator("sdkjsdakjdkl")


// #33 Wap to create hexadecimal code for background color using RGB values

const hexaCodeGenerator = () => {
    // const rlt = Math.random()
    // const glt = Math.random()
    // const blt = Math.random()

    // const hexCode = `#${Math.floor(rlt * 255).toString(16).padStart(2, '0')}${Math.floor(glt * 255).toString(16).padStart(2, '0')}${Math.floor(blt * 255).toString(16).padStart(2, '0')}`

    const hexCode = `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
    console.log(hexCode)

}

hexaCodeGenerator()


// #34 WAP to remove duplicates from an array

const removeDplicates = (arr) => {
    const uniqueArr = [...new Set(arr)]
    console.log(uniqueArr)
}

removeDplicates([1, 2, 2, 3, 4, 4, 5])



// # 35 WAP to get Object is empty or not


const getObjectEmpty = (obj) => {
    // if(Object.keys(obj).length === 0){
    //     console.log("Object is empty");
    //     return true
    // }
    // console.log("Object is not empty");
    // return false

    for (const key in obj) {
        if(obj.hasOwnProperty(key)){
            console.log("Object is not empty");
            return false
        }
    }
    console.log("Object is empty");
    return true
}

getObjectEmpty({})

getObjectEmpty({name: "John", age: 30})


// #36 WAP to convert object to array and vice-versa

// #37 WAP to get difference between two dates

// #38 WAP to get the age of persone from date of birth


const getAge = (dob) => {
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
        age--
    }
    console.log(`Age is ${age}`);

    // let ageDiff = birthDate - today
    // const age = Math.abs(Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25)))
    // console.log(`Age is ${age}`);

}

getAge("1990-07-01")