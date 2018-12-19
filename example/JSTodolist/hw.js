var todos = [];
let id =0;

function addTodo(title) {
   id++;
  todos.push({id,  title,  done: false  });
}


function getTodos() {
  return todos;
}

const buttonAdd = document.getElementById('buttonAdd');
const inputTitle = document.getElementById('inputTitle');
const removeTitle = document.getElementById('removeTitle');
const target = document.getElementById('target');

function init() {
  var todos = getTodos();
  let html = [];
  for (let todo of todos) {
    html.push(`

      <tr>
        <td>${todo.id}</td>
        <td class=${todo.done ? "done" : ""}>${todo.title}</td>
          <td>
            <button type = "button" class="btn btn-info" onclick="buttonDone(${todo.id})">완료</button>
            <button type = "button" class="btn btn-info" onclick="buttonDelete(${todo.id})">삭제</button>
          </td>
      </tr>
      `);
  }
  target.innerHTML = html.join('');
}


buttonAdd.onclick = function() {
  addTodo(inputTitle.value);
  init();
  inputTitle.value = '';

};


function buttonDone(id) {
let todo = todos.find( o=> o.id === id);
todo.done = !todo.done;
init();
}

function buttonDelete(id) {
let todo = todos .findIndex( o=> o.id === id)
todos.splice(todo,1);

  init();

}
