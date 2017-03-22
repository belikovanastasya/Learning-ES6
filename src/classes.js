class Task {
    constructor(title = Task.getDefaultTitle() ){
     this.title = title;
     this._done = false;
     Task.count += 1;
    }
    complete (){
        this.done = true;
        console.log(`Task ${this.title} done`)
    }
    static getDefaultTitle(){
        return "Task";
    }
    get done (){
        return this._done === true? 'Task done':'Task not done'
    }
    set done (value){
        if(value!= undefined && typeof value === 'boolean'){
            this._done = value;
        }
        else{
            console.error('error');
        }
    }

}
/*Task.count = 0;*/
let task = new Task("clean the room");
/*console.log(task.title);
console.log(task instanceof Task)
task.complete();
console.log(Task.count)
let task3 = new Task();
console.log(task3.title)*/
console.log(task.done);  
task.complete();
console.log(task.done);   