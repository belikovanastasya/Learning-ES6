'use strict';

var add = function add(x, y) {
    return x + y;
};
console.log(add(2, 5));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

arr.forEach(function (num) {
    return sum += num;
});
console.log(sum);

var person = {
    name: 'John',
    greering: function greering() {
        var self = this;
        setTimeout(function () {
            console.log('hello ' + self.name);
        }, 2000);
    }

};
person.greering();