function greet(greeting = 'Hello', name = 'John'){
    console.log(`${greeting} ${name}`);
}
greet('Hi');



function sum(...values){
    let sum = 0;
    values.forEach(function(value){
        sum+=value;
    })
    console.log(sum);
}
sum(2, 5, 6, 3);