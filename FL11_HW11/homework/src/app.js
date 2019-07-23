let li = document.getElementsByTagName('li');
let list = document.getElementById('list');
let newAction = document.getElementById('newAction');
let addNewAction = document.getElementById('addNewAction');
let lenli = 10;

window.onload = function() {
  let done = document.getElementsByClassName('done');
  let deleteItem = document.getElementsByClassName('delete');
  let edit = document.getElementsByClassName('edit');
  doneFun(done);
  editFun(edit);
  deleteFun(deleteItem);
};

function editFun(arg) {
  if (arg.length === undefined) {
    arg.addEventListener('click', event => addEvent(event));
  } else {
    for (let i = 0; i < arg.length; i++) {
      arg[i].addEventListener('click', event => addEvent(event));
    }
  }

  function addEvent(event) {
    let parentDiv = event.target.parentElement.parentElement;
    parentDiv.style.display = 'none';
    let span = event.target.previousElementSibling;
    let li = event.target.parentElement.parentElement.parentElement;
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    let button = document.createElement('i');
    button.classList.add('material-icons');
    button.innerHTML = 'save';
    let inputBlock = document.createElement('div');
    inputBlock.classList.add('inputBlock');
    let valueInput;
    li.append(inputBlock);
    inputBlock.append(input);
    inputBlock.append(button);

    button.addEventListener('click', function() {
      valueInput = input.value;
      inputBlock.style.display = 'none';
      parentDiv.style.display = 'flex';
      span.innerHTML = valueInput;
    });
  }
}

function deleteFun(arg) {
  if (arg.length === undefined) {
    arg.addEventListener('click', event => addEvent(event));
  }
  for (let i = 0; i < arg.length; i++) {
    arg[i].addEventListener('click', event => addEvent(event));
  }
  function addEvent(event) {
    let liDelete = event.target.parentElement.parentElement;
    list.removeChild(liDelete);
  }
}

addNewAction.addEventListener('click', function() {
  if (newAction.value !== '' && li.length < lenli) {
    let newActionValue = newAction.value;
    let li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    let divParent = document.createElement('div');
    divParent.classList.add('disappear');
    let divChild = document.createElement('div');
    let iDone = document.createElement('i');
    iDone.classList.add('material-icons');
    iDone.classList.add('done');
    iDone.style.opacity = '0';
    iDone.innerHTML = 'done';
    let iSquare = document.createElement('i');
    iSquare.classList.add('material-icons');
    iSquare.innerHTML = 'crop_square';
    let span = document.createElement('span');
    span.innerHTML = newActionValue;
    let iEdit = document.createElement('i');
    iEdit.classList.add('material-icons');
    iEdit.classList.add('edit');
    iEdit.innerHTML = 'edit';
    let iDelete = document.createElement('i');
    iDelete.classList.add('material-icons');
    iDelete.classList.add('delete');
    iDelete.innerHTML = 'delete';

    divChild.appendChild(iDone);
    divChild.appendChild(iSquare);
    divChild.appendChild(span);
    divChild.appendChild(iEdit);

    divParent.appendChild(divChild);
    divParent.appendChild(iDelete);
    li.appendChild(divParent);
    list.appendChild(li);

    doneFun(iDone);
    editFun(iEdit);
    deleteFun(iDelete);

    newAction.value = '';
  }
});

function doneFun(arg) {
  if (arg.length === undefined) {
    arg.addEventListener('click', event => addEvent(event));
  }
  for (let i = 0; i < arg.length; i++) {
    arg[i].addEventListener('click', event => addEvent(event));
  }
  function addEvent(event) {
    let targetStyle = event.target.style.opacity;
    targetStyle === '0'
      ? event.target.style.opacity = '1'
      : event.target.style.opacity = '0';
  }
}
