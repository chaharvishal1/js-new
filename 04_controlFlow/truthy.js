const userEmail = []
if(userEmail) {
    // console.log("user have valid email");
}
else {
    // console.log("user have not");
}

if(userEmail.length === 0){
    // console.log("array is empty");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10
val = undefined ?? 10

// console.log(`value of val is : ${val}`);



const icePrice = 300;
(icePrice > 200) ? console.log("You have to pay additional 100rp") : console.log("You have to not pay additional");