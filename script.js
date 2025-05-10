
// Moving all the DOM queries for better Performance
const Input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn  = document.getElementById("addTask")

let data = [];


function addTask() {
  // getting the user input value 
  const  task = Input.value;
  if (task !== "") {
    const newTask = {
      // random generating id 
      id: crypto.randomUUID(),
      name: task,
      done:false
    }
    data.unshift(newTask)
    // reseting the input back to empty
    Input.value = "";
    console.log(data)
    RenderTaskList();
  }else{
    window.alert("Please add a task")
    return
  }
}
// Fixed the Function name b => RenderTaskList 
function RenderTaskList() {
  taskList.innerHTML = data.map((task)=>{
    return `<li class="task">
        <h4 class= ${task.done ? "done" : "" } >${task.name}</h4>
         <div>
          <button class="complete-btn" onClick=toggle("${task.id}") >Toggle</button>
          <button class="delete-btn")  onClick=deleteTask("${task.id}") >Delete</button>
         </div>
    </li>`
  }).join("");
}


// better Toggle function just toggle the value of the task.done 

function toggle(taskID){
  task = data.find(task=> task.id === taskID)
  task.done = !task.done
  RenderTaskList()
} 

// Used filter to eleminate the task with a passed TaskID 
function deleteTask(taskID) {
  data = data.filter(task => task.id !== taskID)
  RenderTaskList();
}


addBtn.addEventListener("click", ()=>{
  addTask()
})