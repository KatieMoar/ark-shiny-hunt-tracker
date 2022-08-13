
/* -------------------------------------------- */
/*            MAIN LIST FUNCTIONALITY           */
/* -------------------------------------------- */


//SELECTORS

const toDoInput = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')




//EVENT LISTENERS

document.addEventListener('DOMContentLoaded', getToDos)
toDoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterToDo)



function deleteCheck(event) {
    const item = event.target
    //Check to do
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

function filterToDo (event) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo) {
        switch(event.target.value){
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
        }
    })
}


function getToDos() {
    let todos = ['Abberation', 'Crystal Isles', 'Extinction', 'Fjorudr', 'Gen 2 [Missions]', 'Gen 1', 'Gen 2', 'Lost Island', 'Ragnarok', 'Scorched Earth', 'The Center', 'The Island', 'Valguero']
    todos.forEach(function(todo){
        //Creating to do DIV
        const toDoDiv = document.createElement('div')
        toDoDiv.classList.add('todo')
        //Creating to do LI
        const newToDo = document.createElement('li')
        newToDo.innerText = todo
        newToDo.classList.add('todo-item')
        //Appending LI's to the DIV
        toDoDiv.appendChild(newToDo)
        //Checkmark Button
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn')
        toDoDiv.appendChild(completedButton)
        //Append To Do Div to UL
        toDoList.appendChild(toDoDiv)
        })
}


