// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Add a click event to mark tasks as completed
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create a delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";
}
