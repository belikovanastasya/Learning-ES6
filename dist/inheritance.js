'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(title) {
        _classCallCheck(this, Task);

        console.log('Todo list');
        this.title = title;
        this.done = false;
    }

    _createClass(Task, [{
        key: 'complite',
        value: function complite() {
            this.done = true;
            console.log('Task "' + this.title + '" done');
        }
    }]);

    return Task;
}();

var Subtask = function (_Task) {
    _inherits(Subtask, _Task);

    function Subtask(title) {
        _classCallCheck(this, Subtask);

        return _possibleConstructorReturn(this, (Subtask.__proto__ || Object.getPrototypeOf(Subtask)).call(this, title));
    }

    return Subtask;
}(Task);

var task = new Task('run the maraphon');
var subtask = new Subtask('training');

task.complite();
subtask.complite();

console.log(task);
console.log(subtask);