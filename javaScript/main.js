/* <div title="Hit Double Click and Complete" ondblclick="toDoDone()">Sample One</div>
<img src="images/delete.svg" alt="Delete" class="delete-icon" id="delete-img" onclick="toDoDelete()"/> */

let list = document.getElementById('list');

function addToList(){
    const userInput = document.getElementById('inputText').value;
    let li = document.createElement('li');
    li.innerHTML += `<div title="Hit Double Click and Complete" ondblclick="toDoDone()">${userInput}</div>
                    <img src="images/delete.svg" alt="Delete" class="delete-icon" id="delete-img" onclick="toDoDelete()"/>`
    
    list.appendChild(li);
    
}

function toDoDone() {

}

function toDoDelete(){}