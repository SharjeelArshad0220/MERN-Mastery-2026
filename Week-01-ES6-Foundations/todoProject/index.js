let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();
function getTask() {
  const title = document.getElementById('title-input').value;
  const date = document.getElementById('date-input').value;
  const priority = document.getElementById('priority-input').value;
  if (!title || !date || !priority) {
    alert('Please fill all fields');
    return null;
  }
  document.getElementById('title-input').value = '';
  document.getElementById('date-input').value = '';
  document.getElementById('priority-input').value = '';
  console.log(title, date, priority);
  return { id: Date.now() + Math.random(), title, date, priority, isCompleted: false }
}
document.getElementById('add-btn').addEventListener('click', () => {
  const task = getTask();
  if (task) {
    allTasks.push(task);
    renderTasks();
  }
});
// Pehle elements ko select karein
const slider = document.getElementById("slider");
const viewTasksBtn = document.getElementById("viewTasks");
const addTaskBtn = document.getElementById("addTask");

// Jab "View Tasks" par click ho -> Left Move kare (-50%)
viewTasksBtn.addEventListener('click', () => {
    slider.style.transform = "translateX(-50%)";
});

// Jab "Add Task" par click ho -> Wapis Right Move kare (0%)
addTaskBtn.addEventListener('click', () => {
    slider.style.transform = "translateX(0%)";
});
// function slide() {
//   document.getElementById("viewTasks").addEventListener('click',()=>{
//     console.log("hey there")
//     document.getElementById("slider").style.transform="translateX(-50%)";
//   })
//   document.getElementById("addTask").addEventListener('click',()=>{
//     document.getElementById("slider").style.transform="translateX(-50%)";
//   })
// }
// slide();

function renderTasks() {
  const high = document.getElementById('high-list');
  const medium = document.getElementById('med-list');
  const low = document.getElementById('low-list');
  low.innerHTML = '';
  medium.innerHTML = '';
  high.innerHTML = '';
  allTasks.forEach(task => {
    const taskHTML = `
     <div class="task-card ${task.isCompleted ? 'completed' : ''}">
      <div class = "task-info">
      <h3>${task.title}</h3>
      <span class="task-date">${task.date}</span>
    </div>
    <div class="task-actions">
      <button onclick="toggleTask(${task.id})">${task.isCompleted ? 'undo' : 'Done'}</button>
      <button onclick="editTask(${task.id})" class="edit-btn">✏️</button>
      <button   class ="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
    </div>
  </div>
     `;
    if (task.priority === 'high') { high.innerHTML += taskHTML; }
    else if (task.priority === 'medium') { medium.innerHTML += taskHTML; }
    else if (task.priority === 'low') { low.innerHTML += taskHTML; }
  });
  saveTasks()
}
function toggleTask(id) {
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.isCompleted = !task.isCompleted;
    }
    return task;
  });
  renderTasks();
}
function deleteTask(id) {
  allTasks = allTasks.filter(task => task.id !== id);
  renderTasks();
}
function editTask(id) {
  const task = allTasks.find(t => t.id === id);
  const newTitle = prompt("Edit Task Name:", task.title);

  if (newTitle) {
    task.title = newTitle; // Naam update
    saveTasks(); // Save
    renderTasks(); // Screen refresh
  }
}
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(allTasks));
}
