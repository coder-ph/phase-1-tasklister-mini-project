document.addEventListener('DOMContentLoaded', function(e){
    const formId = document.getElementById('createtaskform');
    
    formId.addEventListener('submit', function(e){
        e.preventDefault()
        let contentHolder = e.target.newTaskDescription.value;
        outputtask(contentHolder);
        formId.reset()
    })
})

function outputtask(output) {
    const myUlList = document.querySelector('ul');
    const myNewList = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = 'remove'

    btn.addEventListener('click', function(e){
        e.target.parentNode.remove()
    })
    myNewList.textContent = output + ' ';

    myNewList.appendChild(btn)
    myUlList.appendChild(myNewList)
}