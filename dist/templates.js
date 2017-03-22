'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}
greet('Bill');

function createEmail(to, from, subject, massage) {
    console.log('\nTo:' + to + '\nFrom:' + from + '\nsubject:' + subject + '\nmassage:' + massage + '\n');
}

createEmail('john.mail.com', 'Jaine@mail.com', 'Hello', 'hello my name is John');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (x + y));
}
add(5, 7);

var name = "John";
var surname = "Doe";
console.log(upperName(_templateObject, name));

function upperName(literal, values) {
    return literal[0] + values.toUpperCase();
}