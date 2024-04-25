document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todoForm");
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  let editMode = false;
  let taskToEdit = null;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
      if (editMode && taskToEdit) {
        // Modo de edição
        taskToEdit.firstChild.textContent = taskText; // Atualiza o texto da tarefa
        editMode = false;
        taskToEdit = null;
        form.reset();
      } else {
        // Modo de adição
        addTask(taskText);
        form.reset();
      }
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", function () {
      editMode = true;
      taskToEdit = li;
      input.value = taskSpan.textContent;
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
});
