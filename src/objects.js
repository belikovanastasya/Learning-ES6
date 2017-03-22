let firstname = "John",
    lastname = "Doe",
    email = 'John@gmail.com';

 let person = {
     firstname,
     lastname,
     email,
     sayHello(){
         console.log(`Hi, my name is ${this.firstname}`);
     },
     get fullName (){
         return this.firstname + ' ' + this.lastname
     },
     set fullName(val){
         return this.firstname = val;
     }

 } 

 person.fullName = 'Hey'
 console.log(person.fullName);
 

/* person.sayHello();

 function createCar(property, value){
       return {[property]: value}
 }
console.log(createCar("vin",1)) ;*/
 