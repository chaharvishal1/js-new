let myHeros = ["Thor", "Sprider", "Batman"]


let heroPower = {
    thor: "Hammer",
    sprider: "Sling",
    getSpiderPower: function() {
        console.log(`Spider power is ${this.sprider}`);
    }
}

// heroPower.getSpiderPower()

Object.prototype.heyHitesh = function() {
    console.log(`heyHitesh are included`);
}

Array.prototype.hiHitesh = function() {
    console.log(`hiHitesh are included`);
}


// myHeros.heyHitesh()
// myHeros.heyHitesh()



// Modern syntax for inharitence


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
}

Object.setPrototypeOf(TeachingSupport, Teacher)



let exampleVal = "This is day and night   "


String.prototype.trueLength = function() {
    console.log(`Exact length is ${this.trim().length}`);
    console.log(`${this}`);
    
}

exampleVal.trueLength()