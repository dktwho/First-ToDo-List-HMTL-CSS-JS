
const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')

todoForm.addEventListener('submit', formHandler )

function formHandler(event) {
  event.preventDefault()


  // получаем  значение из фОРМЫ инпута
  const taskText = todoInput.value


  // создаем тэг li через создание ЭЛЕМЕНТА
  const newtask = document.createElement('li')
  newtask.innerText = taskText
  todoList.append(newtask)

  // создаем кнопку удалить
  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('role', 'button')     // необходимо добавлять им роль
  deleteBtn.innerText = 'DELETE'
  deleteBtn.style['margin-left'] = '15px'
  deleteBtn.style['background'] = 'yellow'
  newtask.append(deleteBtn)
 

  // Добвляем событие по клику
  deleteBtn.addEventListener("click", function() {
    this.closest('li').remove()
  })


  //  добавляем элемент на страницу
  todoList.append(newtask)

  // очищаем инпут
  todoInput.value = ''

  // фокус остается в поле инпута после сабмита
  todoInput.focus()
}








































