"use strict";

var firstname = "John",
    lastname = "Doe",
    email = 'John@gmail.com';

var person = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    sayHello: function sayHello() {
        console.log("Hi, my name is " + this.firstname);
    },

    get fullName() {
        return this.firstname + ' ' + this.lastname;
    },
    set fullName(val) {
        return this.firstname = val;
    }

};

person.fullName = 'Hey';
console.log(person.fullName);

/* person.sayHello();

 function createCar(property, value){
       return {[property]: value}
 }
console.log(createCar("vin",1)) ;*/