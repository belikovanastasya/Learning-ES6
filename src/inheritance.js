class Task {
    constructor(title){
        console.log('Todo list');
        this.title = title;
        this.done = false;
    }
    complite(){
        this.done = true;
        console.log(`Task "${this.title}" done`);
    }
}

class Subtask extends Task {
    constructor(title){
        super(title);
    }
}


let task = new Task('run the maraphon');
let subtask = new Subtask('training');

task.complite();
subtask.complite();

console.log(task);
console.log(subtask);