/* <div title="Hit Double Click and Complete" ondblclick="toDoDone()">Sample One</div>
<img src="images/delete.svg" alt="Delete" class="delete-icon" id="delete-img" onclick="toDoDelete()"/> */

let list = document.getElementById('list');
const alertMg = document.getElementById('alert');

function addToList() {
    const userInput = document.getElementById('inputText').value;
    let li = document.createElement('li');
    
    if(userInput == ''){
        alertMg.style.color = 'red';
        alertMg.textContent = 'Plese Add Item!';
    }
    else {
        li.innerHTML += `<div title="Hit Double Click and Complete" ondblclick="toDoDone(event)">${userInput}</div>
        <img src="images/delete.svg" alt="Delete" class="delete-icon" id="delete-img" onclick="toDoDelete(event)"/>`

        list.appendChild(li);
        alertMg.style.color = 'rgb(15, 197, 15)'
        alertMg.textContent = 'To Do item Crated Succeslly! '
        setInterval( () => alertMg.textContent = '',3000);
    }

}

function toDoDone(event) {
    const item = event.target;
    item.classList.toggle('done-style');
}

function toDoDelete(event) {
    let element = event.target.closest('li');
    element.remove();
 }