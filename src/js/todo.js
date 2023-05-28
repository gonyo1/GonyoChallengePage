const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-input")
const toDoList = document.querySelector("#todo-ul")

// localstorage 에 저장된 게 있으면 불러오고 시작
var toDos = []
const TODOS_KEY = "todos"
const savedToDos = localStorage.getItem(TODOS_KEY);

// main functions
function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
function deleteToDo(event) {
    const li = event.target.parentElement;

    // remove from database
    // 딕셔너리형태인데 li["id"] 로 인쓰고 li.id 로 쓰네?
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    saveToDo()

    // remove from browser
    li.remove();
}
function paintToDo (newTodoObject) {
    // create li tag
    const toDoLi = document.createElement("li");
    toDoLi.id = newTodoObject["id"]

    // create span / button tag
    const toDoSpan = document.createElement("span");
    const toDoDelete = document.createElement("button");

    // awesome icon to button
    toDoDelete.className = "fa-solid fa-check";

    toDoSpan.innerText = `  ${newTodoObject["text"]}`;
    toDoDelete.addEventListener("click", deleteToDo)

    toDoLi.appendChild(toDoDelete);
    toDoLi.appendChild(toDoSpan);

    // add li to ul
    toDoList.appendChild(toDoLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    // get value from input tag
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    // give id to datas
    const newTodoObject = {
        text: newTodo,
        id: Date.now()
    }
    // paint with newTodoObject
    paintToDo(newTodoObject)

    // push to localstorage
    toDos.push(newTodoObject)
    saveToDo()
}

toDoForm.addEventListener("submit", handleToDoSubmit);


//  ----------------------------------------------------/

if (savedToDos) {
    // string to array JSON.parse(스트링)
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);

    // function for each
    parsedToDos.forEach((item) => paintToDo(item));
}