// let myName =  "rahul  "
// let myChannel = "chai"
// // console.log(myName.length);
// console.log(myName.trueLength);
// // console.log(myName.trim().length);


let myHero = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


Object.prototype.rahul = function(){
    // console.log(`rahul is present in all objects`);
}
// heroPower.rahul()
myHero.rahul()


Array.prototype.heyRahul = function(){
    console.log(`Rahuul say hello`);
}

// myHero.rahul()
// myHero.heyRahul()
// heroPower.heyRahul()


//inheritance
const User = {
    name: "chai",
    email:"chai@gooogle.com"

}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport  = {
    makeAssignment : `JS assignment`,
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__= User

// modern syntex

Object.setPrototypeOf(TeachingSupport,Teacher)



const anotnerUserName = "ChaiAurCode"


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is :${this.trim().length}`);
}
anotnerUserName.trueLength()
"rahul".trueLength()
"chaiThanda".trueLength()
"coffeeThanda".trueLength()