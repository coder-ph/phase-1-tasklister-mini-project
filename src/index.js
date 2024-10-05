document.addEventListener("DOMContentLoaded", (e) => {
  const taskForm = document.getElementById('create-task-form');
  
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const taskDescription = e.target.newTaskDescription.value;

    printOutPut(taskDescription);
    taskForm.reset();
  });
});

function printOutPut(output) {
  let ulList = document.querySelector('#tasks');
  let listItem = document.createElement('li');
  let deleteBtn = document.createElement('button');

  deleteBtn.addEventListener('click', handleDelete);
  deleteBtn.textContent = 'x';

  listItem.textContent = output + " ";
  listItem.appendChild(deleteBtn);
  
  ulList.appendChild(listItem);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
