let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement("div");
  item.classList.add('.item');
  document.getElementsByClassName('.item').id = 'item-'+order;
  dragElement(item);

  let input = document.createElement('input');

  item.append(input);

  let save_btn = document.createElement('button');
  save_btn.innerHTML = 'Save';

  document.addEventListener('click', () => {
  error.innerHTML = '';

  if (input.value) {
    order += 1;
    item.innerHTML = input.value;
    adding = false;

  } else {
    error.innerHTML = message;
  }
})

  item.append(save_btn);

  return item;

};

function dragElement(el) {
  let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
  if (document.getElementById(el.id + "header")) {
    document.getElementById(el.id + "header").onmousedown = dragMouseDown;
  } else {
    el.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    p3 = e.clientX;
    p4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    p1 = p3 - e.clientX;
    p2 = p4 - e.clientY;
    p3 = e.clientX;
    p4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - p2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - p1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

document.addEventListener("dragstart", (event) =>  {
  return event.DataTransfer.setData('text', event.target.id);
})

document.addEventListener("dragend", (event) => {
  return event.DataTransfer.clearData(event);

})




document.querySelectorAll('.drop').forEach(element => {
  document.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.DataTransfer.getData('text');
    event.target.append(document.getElementById('id'));
  })

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  })
});