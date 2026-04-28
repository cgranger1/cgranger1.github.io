//create task array to store objects
let tasks = [];

//event listener to add task to list upon submit button click
document.getElementById("myForm").addEventListener("submit", function(event) {

    //prevent page reload
    event.preventDefault();

    //create variables for different inputs on form as well as date and completion variable
    const taskName = document.getElementById("inputField").value;
    const priority = document.getElementById("contextMenu").value;
    const isImportant = document.getElementById("checkbox").checked;
    const isDone = false;
    const date = new Date().toLocaleDateString();

    //establish task object
    const task = {
        id: tasks.length + 1,
        name: taskName,
        priority: priority,
        isImportant: isImportant,
        isCompleted: isDone,
        date: date
    };

    //add task to the array
    tasks.push(task);

    //display tasks in div
    displayTasks();

    //display console log of task list
    console.log(JSON.stringify(tasks, null, 5));
});

function displayTasks() {

    //variable for taskmanager div
    let taskManagerDiv = document.getElementById("taskmanager");

    //for each task in task array
    tasks.forEach(task => {

        //make new div with class and id from object list
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.id = task.id;

        //style depending on importance, priority, and completion (linked to css code)
        if (task.isImportant) {
            taskDiv.classList.add("important");
        }
        if (task.isCompleted) {
            taskDiv.classList.add("done");
        }
        if (task.priority === "High") {
            taskDiv.classList.add("high");
        }

        //display task
        taskDiv.innerHTML = `<pre><p>${task.name} \t\t\t\t\t Priority: ${task.priority} \t\t\t\t\t Added on: ${task.date}</p></pre>
            <input type="checkbox" class="doneToggle" id="doneToggle" taskId="${task.id}" ${task.isCompleted ? 'checked' : ''}>Done</input>
            <button class="deleteTask" taskId="${task.id}">Delete</button>`;

        //append task div to the taskmanager div
        taskManagerDiv.appendChild(taskDiv);
})};

//add event listeners to toggle done and delete buttons
document.querySelectorAll(".doneToggle").forEach(checked => {
        checked.addEventListener('change', function() {
            //let done = tasks.find(tasks => tasks.isDone);
            if (this.checked) {
                taskDiv.classList.add("done");
                console.log(JSON.stringify(tasks, null, 5));
                displayTasks();
}})});

document.querySelectorAll(".deleteTask").forEach(button => {
    button.addEventListener('click', function() {
        let taskId = (this.getAttribute('taskId'));
        let tasks = tasks.filter(task => task.id !== taskId);  //delete task from array
        let clickedDiv = document.getElementById(taskId);
        clickedDiv.parentNode.removeChild(clickedDiv); //delete from div
        console.log(JSON.stringify(tasks, null, 5));
        displayTasks();
})});