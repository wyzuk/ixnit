const form = document.getElementById('form');
const inp = document.getElementById('inp');
const list = document.getElementById('list');

let todos = JSON.parse(localStorage.getItem('mini_todos') || '[]');

function render() {
  list.innerHTML = '';
  todos.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = t.done ? 'done' : '';
    li.innerHTML = `
      <span onclick="toggle(${i})">${t.text}</span>
      <button onclick="del(${i})">x</button>
    `;
    list.appendChild(li);
  });
  localStorage.setItem('mini_todos', JSON.stringify(todos));
}

window.toggle = (i) => {
  todos[i].done = !todos[i].done;
  render();
};

window.del = (i) => {
  todos.splice(i, 1);
  render();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({ text: inp.value, done: false });
  inp.value = '';
  render();
});

render();
