//Selecteurs

const todo_Input = document.querySelector(".todoInput");
const todo_Button = document.querySelector(".todoButton");
const todo_List = document.querySelector(".todoList");

//Ecouteurs

todo_Button.addEventListener("click", addTodo);

//Fonctions

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
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-Item");

  // 2 - 1 Nous devons mettre le <li> à l'intérieur de la <div> en gros on dit : newTodo devient un enfant de todoDiv

  todoDiv.appendChild(newTodo);

  // 3 - Bouton Checked

  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkedButton.classList.add("checked-Button");
  todoDiv.appendChild(checkedButton);

  // 4 - Bouton Delete

  const deletedButton = document.createElement("button");
  deletedButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deletedButton.classList.add("delete-dButton");
  todoDiv.appendChild(deletedButton);

  // 5 - Ajouter todo à todoList existante
  todo_List.appendChild(todoDiv);
}
