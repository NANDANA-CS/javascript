const addButton = document.getElementById('addButton')
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
let editMode = null
function addTodo() {
    const todoText = todoInput.value.trim()
    if (todoText !== "") {
        if (editMode) {
            editMode.querySelector('span').textContent = todoText
            editMode = null
            addButton.textContent = "Add"
        } else {
            const li = document.createElement('li')
            li.classList.add('todo-item')
            const span = document.createElement('span')
            span.textContent = todoText
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.addEventListener('change', function () {
                span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
            })
            const editButton = document.createElement('button')
            editButton.textContent = 'Edit'
            editButton.addEventListener('click', function () {
                todoInput.value = span.textContent
                todoInput.focus()
                editMode = li
                addButton.textContent = "Modify"
            })
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(li)
                if (editMode === li) {
                    editMode = null
                    addButton.textContent = "Add"
                }
            })
            li.appendChild(checkbox)
            li.appendChild(span)
            li.appendChild(editButton)
            li.appendChild(deleteButton)
            todoList.appendChild(li)
        }
        todoInput.value = ''
        todoInput.focus()
    }
}
addButton.addEventListener('click', addTodo)
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo()
    }
})

