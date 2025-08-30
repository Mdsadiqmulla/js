const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("delete");
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
