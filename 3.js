//Array of strings 3(a)
let tasks = ["Work", "Shopping", "Homework"];

//3(b) i.
const addTask = (task)=>{

    //3(b) ii.
    //Pushing a value to the array of tasks
    tasks.push(task);

    //3(b) iii.
    console.log("New task added");

    //3(b) iv.
    console.log(tasks.length);
}

//3(c)
const listAllTasks = ()=>{
    //3(c) i.
    //Iterating over all the tasks in the array
    tasks.forEach((item)=>{
        //3(c) ii.
        //Printing each array in the console
        console.log(item);
    })
}
//Calling function
addTask("Sports");
listAllTasks();