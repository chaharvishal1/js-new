function sayHello(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayHello();


// function addVal(val1, val2)
// {
//     console.log(val1 + val2);
// }

function addVal(val1, val2)
{
    return val1 + val2
}

const result = addVal(3, 4)

// console.log(result);

function loginUser(username = 'sam'){
    if(!username){
        console.log("Please enter username");
        return
    }
    else {
        return `User name is ${username}`
    }
}

// console.log(loginUser('Vishal'));


function calculatePrice(val1, val2, ...num){
    return num
}

// console.log(calculatePrice(200, 400, 500, 700, 1200, 1500))


const userDetails = {
    name: "vishal",
    age : 28
}


function showUser(obj){
    console.log(`name is ${obj.name} and age is ${obj.age}`);    
}

// showUser(userDetails);
showUser({
    name: "vishal",
    age : 28
})


function returnSecondEle(arr){
    return arr[1]
}

console.log(returnSecondEle([100, 200, 300, 400, 500]));
