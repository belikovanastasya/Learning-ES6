let person =  {
firstName: 'John',
lastname: 'Doe',
social: {
    facebook: 'JD',
    blog: 'JohnD'
}
}

let {firstName: first, lastname: last, age = 25, social: {blog}} = person;
console.log(first, last, age, blog)