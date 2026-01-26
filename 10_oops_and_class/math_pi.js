const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);

Math.PI = 40;

// console.log(Math.PI);


const chai = {
    name: "ice tea",
    price: 200,
    isAvible: true,

    orderChai: function(){
        console.log("Chai is ready");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`Key is : ${key} and Value is : ${value}`);
    }

}

