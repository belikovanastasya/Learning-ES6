let add = (x,y) => x + y;
console.log(add(2, 5))


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

arr.forEach(num => sum += num)
console.log(sum);


let person = {
    name: 'John',
    greering: function(){
        var self = this;
        setTimeout(()=>{
          console.log(`hello ${self.name}`) 
        },2000)
       
    }
    
}
person.greering();
