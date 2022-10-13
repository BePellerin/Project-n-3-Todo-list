//Selecteurs

const todo_Input = document.querySelector(".todoInput");
const todo_Button = document.querySelector(".todoButton");
const todo_List = document.querySelector(".todoList");
const filterOption = document.querySelector(".filter-todo");

//Ecouteurs
document.addEventListener("DOMContentLoaded", getTodos);
todo_Button.addEventListener("click", addTodo);
todo_List.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);

//Fonctions

// FONCTION 1 AJOUT D'UNE TODOLIST

function addTodo(event) {
  event.preventDefault();

  //Ce que l'on va créer en HTML pure {
  // <div class="todo">
  //     <li>Texte de la todo</li>
  //     <button>Bouton Checked</button>
  //     <button>Bouton Delete</button>
  // </div>
  //   }

  // 1 - Création d'une <div> lorsque event déclenché par "click"

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // 2 -Création du <li> à l'intérieur de la <div> todo
  const newTodo = document.createElement("li");
  newTodo.innerText = todo_Input.value;
  newTodo.classList.add("todo-Item");

  // 2 - 1 Nous devons mettre le <li> à l'intérieur de la <div> en gros on dit : newTodo devient un enfant de todoDiv

  todoDiv.appendChild(newTodo);

  // AJOUTER DE LA TODO AU LOCAL STORAGE - DERNIERE ETAPE
  saveLocalTodos(todo_Input.value);

  // 3 - Bouton Checked

  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkedButton.classList.add("checked-Button");
  todoDiv.appendChild(checkedButton);

  // 4 - Bouton Delete

  const deletedButton = document.createElement("button");
  deletedButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deletedButton.classList.add("delete-Button");
  todoDiv.appendChild(deletedButton);

  // 5 - Ajouter todo à todoList existante
  todo_List.appendChild(todoDiv);
  todo_Input.value = "";
}

// FONCTION 2 SUPPRIMER OU VALIDER UNE TODOLIST

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "delete-Button") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    //SUPRESSION DU LOCAL STORAGE
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "checked-Button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  // todo.addEventListener("transitionend", function () {
  //   todo.remove();
  // });

  // setTimeout(function () {
  //   todo.remove();
  // }, 500);

  // setTimeout(start(), 5000);

  // function start() {
  //   todo.remove();
  // }
}

// FONCTION 3 RELIER LES TODOS AVEC LE TYPE DEMANDE

function filterTodo(e) {
  const todos = todo_List.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//FONCTION 4 STOCKAGE DES TODOS POUR EVITER L'EFFACEMENT

function saveLocalTodos(todo) {
  //Checker si il y a des items existants
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo_Input.value;
    newTodo.classList.add("todo-Item");
    todoDiv.appendChild(newTodo);

    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkedButton.classList.add("checked-Button");
    todoDiv.appendChild(checkedButton);

    const deletedButton = document.createElement("button");
    deletedButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deletedButton.classList.add("delete-Button");
    todoDiv.appendChild(deletedButton);
    todo_List.appendChild(todoDiv);
  });
}

// POUR LA SUPPRESSION

function removeLocalTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = chilrden[0].innerText;
}
