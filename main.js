const content = document.getElementById('content');
const addButton = document.getElementById('addButton');


const createNewBox = () => {
 const newBox = document.createElement('div');
 newBox.classList.add("newBox");
 newBox.innerHTML = "";
 newBox.style.border = "black";
 newBox.style.height = "auto";
 content.appendChild(newBox);

const title = document.createElement('input');
title.classList.add('sisu');
title.setAttribute( 'id', 'title');
title.setAttribute('type', 'text');
title.setAttribute('value', 'Title/Date');
title.setAttribute('maxlength', '30');
newBox.appendChild(title);

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete');
deleteButton.setAttribute('id', 'deleteButton');
deleteButton.innerHTML = '-';
newBox.appendChild(deleteButton);

const div = document.createElement('div');
div.classList.add('sisu');
div.setAttribute('role', 'textbox');
div.setAttribute('id', 'divpask');
div.setAttribute('contenteditable', 'true');
div.setAttribute('data-text', 'Notes');
newBox.appendChild(div);

}

addButton.addEventListener("click", createNewBox);

document.addEventListener("click", function(event){
    var targetElement = event.target || event.srcElement;
    if(targetElement.id === 'deleteButton') {
        content.removeChild(targetElement.parentElement);
    }
});
