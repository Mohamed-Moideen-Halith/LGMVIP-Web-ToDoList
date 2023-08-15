const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addTodo);

function addTodo() {
  const taskText = todoInput.value;
  if (taskText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${taskText}
      <button class="deleteButton">Delete</button>
    `;
    todoList.appendChild(listItem);
    todoInput.value = "";

    const deleteButton = listItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });
  }
}
