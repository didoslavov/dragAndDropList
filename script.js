const items = document.querySelectorAll('.item');
const list = document.querySelector('.list');

items.forEach(i => {
  i.addEventListener('dragstart', () => {
    setTimeout(() => i.classList.add('drag'), 0);
  });
  i.addEventListener('dragend', () => {
    i.classList.remove('drag');
  });
});

list.addEventListener('dragover', onDrag);

function onDrag(ev) {
  ev.preventDefault();
  const draggingItem = list.querySelector('.drag');
  const siblings = [...list.querySelectorAll('.item:not(.drag)')];

  let nextSibling = siblings.find(s => {
    return ev.clientY <= s.offsetTop + s.offsetHeight / 2;
  });
  
  list.insertBefore(draggingItem, nextSibling);
}
