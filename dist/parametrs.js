'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'John';

    console.log(greeting + ' ' + name);
}
greet('Hi');

function sum() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
}
sum(2, 5, 6, 3);