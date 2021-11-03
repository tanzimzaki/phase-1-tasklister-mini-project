const toDoForm = document.getElementById('create-task-form');
const toDoFormInput = document.getElementById('new-task-description');
const toDoItemContainer = document.getElementById('tasks');  

let captureToDoInputValue = () => {
  return toDoFormInput.value
}

let formSubmit = (event) => {
  event.preventDefault();
  let input = toDoFormInput.value;
  renderListItems(input);

}

let renderListItems = (toDoInput) => {
  let li = document.createElement('li');
  li.innerText = toDoInput
  toDoItemContainer.appendChild(li) 
}

document.addEventListener("DOMContentLoaded", () => {
  toDoForm.addEventListener('submit', formSubmit)

});
