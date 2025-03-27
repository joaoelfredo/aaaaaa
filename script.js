document.addE
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Digite uma senha válida!");
    return;
  }

  let taskList = document.getElementById("taskList");

  let item = document.createElement("li");

  item.innerHTML = ` <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">x</button>
    `;
    if(task.status){
        taskList.classList.add("completed")
    }

  taskList.appendChild(item);
  saveTasks();
  taskInput.value = "";
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach((task) => {
    tasks.push({
      tarefa: task.innerText.trim(),
      status: task.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleTask(elemento) {
  elemento.parentElement.classList.toggle("completed");
}


function deleteTask(button) {
  console.log(button.parentElement);

  button.parentElement.remove();
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task) => {
        let li = document.createElement("li")
    }
}