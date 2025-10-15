const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasks");

const tasks = [];

addTaskBtn.addEventListener("click", () => {
	const taskText = taskInput.value.trim();
	if (taskText) {
		const task = { text: taskText, completed: false };
		tasks.push(task);
		renderTasks();
		taskInput.value = "";
	}
});

clearCompletedBtn.addEventListener("click", () => {
	for (let i = tasks.length - 1; i >= 0; i--) {
		if (tasks[i].completed) {
			tasks.splice(i, 1);
		}
	}
	renderTasks();
});

function renderTasks() {
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const li = document.createElement("li");
		li.className =
			"list-group-item d-flex justify-content-between align-items-center";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = task.completed;
		checkbox.addEventListener("change", () => {
			task.completed = checkbox.checked;
			renderTasks();
		});

		const span = document.createElement("span");
		span.textContent = task.text;
		span.className = "task-text text-left";
		if (task.completed) {
			span.style.textDecoration = "line-through";
		}

		const deleteBtn = document.createElement("button");
		deleteBtn.className = "btn btn-danger btn-sm";
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", () => {
			tasks.splice(index, 1);
			renderTasks();
		});

		li.appendChild(checkbox);
		li.appendChild(span);
		li.appendChild(deleteBtn);
		taskList.appendChild(li);
	});
}

function toggleTaskCompletion(index) {
	tasks[index].completed = !tasks[index].completed;
	renderTasks();
}

function clearCompletedTasks() {
	tasks = tasks.filter((task) => !task.completed);
	renderTasks();
}

clearAllTasksBtn.addEventListener("click", () => {
	tasks.length = 0;
	renderTasks();
});
