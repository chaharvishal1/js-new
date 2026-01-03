const userLoggedIn = true;
const temperature = 41
if(temperature < 50){
    // console.log("temp is less then 50");
}
else {
    // console.log("temp is greater than 50");
}


const score = 200
if(score < 500) {
    const power = "fly"
    // console.log(`Power is ${power}`);
}


const balance = 1300;
if(balance < 1000) {
    // console.log("less then 1000")
}
else if(balance < 1200){
    // console.log("less then 1200");
}
else if(balance < 1500){
    // console.log("less then 1500")
}
else{
    // console.log("less then 1800")
}



const studentRegister = true
const debitCardHolder = true
const gmailAccount = false
const emailWIthLogin = true

if(studentRegister || debitCardHolder) {
    console.log("Allow access for student");
    
}

if(gmailAccount && emailWIthLogin) {
    console.log("student pick books from librarory")
}