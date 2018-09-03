// variables
let rootNode = document.getElementById('root');
let header = document.querySelector('.header');
let input = document.querySelector('.input');
let addTask = document.querySelector('.addTask');

let list = document.createElement('ul');
list.classList.add('list');

let elementsLength = 0;

let numbers = {zero: 0, one: 1, ten: 10};

// logo
let logo = document.createElement('div');
logo.classList.add('logo');
let logoImg = document.createElement('img');
logoImg.src = 'assets/img/cat.png';
logo.appendChild(logoImg);

// events
input.oninput = function() {
	if (input.value === '') {
		addTask.setAttribute('disabled', 'true');
	} else {
		addTask.removeAttribute('disabled');
	}
}

addTask.onclick = function(event) {
	event.preventDefault();
    //li
	let data = input.value;
	let li = document.createElement('li');
	li.classList.add('list-item');
    li.setAttribute('draggable', 'true');
	li.textContent = data;
    addDnDHandlers(li);
    //checkbox
    let idNumber = (list.children.length || numbers.zero) + numbers.one;
    let check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
    check.classList.add('check');
	check.id = 'check' + idNumber;
    check.addEventListener('change', checkboxDisabled);
    //label
    let checkLabel = document.createElement('label');
	checkLabel.setAttribute('for', 'check' + idNumber);
    checkLabel.classList.add('label');
    //delete btn
    let deleteBtn = document.createElement('i');
	deleteBtn.classList.add('material-icons');
	deleteBtn.classList.add('delete');
	deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click', deleteListElement);
    
    
    li.insertBefore(checkLabel, li.firstChild);
    li.insertBefore(check, li.firstChild);
	li.appendChild(deleteBtn);
    
	list.appendChild(li);
	rootNode.appendChild(list);
    
    elementsLength++;
    
    if (elementsLength === numbers.ten) {
        header.textContent = 'Maximum item per list are created';
        input.setAttribute('disabled', true);
        addTask.setAttribute('disabled', true);
    } 
    
};

rootNode.appendChild(logo);


// functions
function deleteListElement() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    elementsLength--;
    if (elementsLength < numbers.ten) {
        header.textContent = 'TODO Cat List';
        input.removeAttribute('disabled');
        addTask.removeAttribute('disabled');
    }  
}

function checkboxDisabled() {
    this.setAttribute('disabled', true);
    let i = document.createElement('i');
    i.classList.add('material-icons');
    i.classList.add('done');
    i.textContent = 'done';
    this.nextElementSibling.appendChild(i);
}


// Drag & Drop


let dragSourceElement = null;

function handleStart(e) {
  dragSourceElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text', this.outerHTML);
  this.classList.add('draggingElement');
}

function handleOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSourceElement !== this) {
    this.parentNode.removeChild(dragSourceElement);
    let dropHTML = e.dataTransfer.getData('text');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
  }
  this.classList.remove('over');
  return false;
}

function handleEnd(e) {
  this.classList.remove('over');
  this.classList.remove('draggingElement');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleStart, false);
  elem.addEventListener('dragover', handleOver, false);
  elem.addEventListener('dragleave', handleLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleEnd, false);
}











