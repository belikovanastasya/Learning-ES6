'use strict';

var person = {
    firstName: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'JD',
        blog: 'JohnD'
    }
};

var first = person.firstName,
    last = person.lastname,
    _person$age = person.age,
    age = _person$age === undefined ? 25 : _person$age,
    blog = person.social.blog;

console.log(first, last, age, blog);