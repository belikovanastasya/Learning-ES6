function greet(name){
    console.log(`hello ${name}`.toUpperCase());
}
greet('Bill');

function createEmail(to, from, subject, massage){
console.log(`
To:${to}
From:${from}
subject:${subject}
massage:${massage}
`)
}

createEmail('john.mail.com', 'Jaine@mail.com', 'Hello', 'hello my name is John')

function add(x,y){
    console.log(`${x} + ${y} = ${x + y}`);
}
add(5,7);


let name = "John";
let surname = "Doe"
console.log(upperName`Hello ${name}`);

function upperName(literal,values){
    return literal[0] + values.toUpperCase();
}