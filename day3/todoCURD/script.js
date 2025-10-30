//curd -->  c-create | u - update |  r-read |  d - delete

//https://crudcrud.com/api/4467be3a0b1d4bb88d978a307e331eb7
const API_URL =
  "https://crudcrud.com/api/16ed57381aad4f58a6cae78f95341e93/todo";

// ---------------------------
// Get DOM elements
// ---------------------------
const output = document.getElementById("output");
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");

// ---------------------------
// LocalStorage: Load saved tasks
// ---------------------------
let todos = JSON.parse(localStorage.getItem("todos")) || []; //list/array

// Save tasks to localStorage
function saveLocal() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ---------------------------
// Create a task element (with Update/Delete buttons)
// ---------------------------
function createTaskElement(todo) {
  const div = document.createElement("div");
  div.className = "task-row";

  const span = document.createElement("span");
  span.textContent = todo.task; // display task text

  // Update button logic
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.className = "task-btn update";
  updateBtn.onclick = async () => {
    const newTask = prompt("Enter new task", todo.task); // ask for new task
    if (newTask) {
      todo.task = newTask; // update local object
      saveLocal(); // update localStorage
      span.textContent = newTask; // update displayed text

      // If task has _id (saved in CrudCrud), update remotely
      if (todo._id) {
        try {
          await fetch(`${API_URL}/${todo._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task: newTask }),
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  // Delete button logic
  const deleteBtn = document.createElement("button"); //create a button
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "task-btn delete";
  deleteBtn.onclick = async () => {
    todos = todos.filter((t) => t !== todo); // remove from local array

    //filter --> [apple mango banana]
    /**
     //start todos = [apple mango banana]
     todos = [mango banana]
      
     todo = apple
     t  = apple !== apple worng not follow conditon.
     t = mango !== apple right
     t = banana !== apple rihgt
     */

    saveLocal(); // update localStorage
    div.remove(); // remove from DOM

    // If task has _id, delete from CrudCrud
    if (todo._id) {
      try {
        await fetch(`${API_URL}/${todo._id}`, { method: "DELETE" });
      } catch (err) {
        console.error(err);
      }
    }
  };

  div.appendChild(span);
  div.appendChild(updateBtn);
  div.appendChild(deleteBtn);
  output.appendChild(div);
}

// ---------------------------
// Recursively display tasks without using a loop
// ---------------------------
function displayTaskRecursively(index) {
  //[1,2,3]
  if (!todos[index]) return; // stop recursion when done
  createTaskElement(todos[index]); // create element for current task
  displayTaskRecursively(index + 1); // call for next task
}

// ---------------------------
// Load tasks from localStorage and display
// ---------------------------
function loadTasks() {
  output.innerHTML = todos.length === 0 ? "No tasks yet!" : ""; // clear output
  /**
   if(todos.lenght === 0){
    output.innerHTML = "no task yet"
   }else{
    output.innerHTML= ""
    }
   */
    output.innerHTML = ""
  displayTaskRecursively(0); // start recursion
}

// ---------------------------
// Add new task
// ---------------------------
addBtn.onclick = async () => {
  const task = taskInput.value.trim(); // "apple    "  --> "apple"
  if (!task) return alert("Enter a task!"); // validate input
  const newTodo = { task }; // create task object
  todos.push(newTodo); // add to local array
  saveLocal(); // save to localStorage
  createTaskElement(newTodo); // add to DOM
  taskInput.value = ""; // clear input

  // Save to CrudCrud and store returned _id
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });
    const saved = await res.json();
    newTodo._id = saved._id; // save _id for update/delete
    saveLocal(); // update localStorage with _id
  } catch (err) {
    console.error("Error saving to API", err);
  }
};

// ---------------------------
// Initial load on page open
// ---------------------------
loadTasks();
