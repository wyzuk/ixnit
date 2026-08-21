// Todo DOM Experiment
// Uses state-driven render pattern rather than imperatively modifying DOM everywhere.

const STORAGE_KEY = 'ixnit_todos_v1';

let state = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    { id: '1', text: 'Document event loop notes', completed: true },
    { id: '2', text: 'Fix responsive flexbox card glitch', completed: false },
    { id: '3', text: 'Write retry helper with exponential backoff', completed: false }
  ],
  filter: 'all' // 'all' | 'active' | 'completed'
};

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
}

// DOM Elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const itemsLeft = document.getElementById('items-left');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

function render() {
  todoList.innerHTML = '';

  const filtered = state.todos.filter(t => {
    if (state.filter === 'active') return !t.completed;
    if (state.filter === 'completed') return t.completed;
    return true;
  });

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.completed ? ' completed' : '');
    li.dataset.id = todo.id;

    li.innerHTML = `
      <div class="todo-left">
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span>${escapeHtml(todo.text)}</span>
      </div>
      <button class="delete-btn" title="Delete task">&times;</button>
    `;

    todoList.appendChild(li);
  });

  const activeCount = state.todos.filter(t => !t.completed).length;
  itemsLeft.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;

  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === state.filter);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  state.todos.push({
    id: Date.now().toString(),
    text,
    completed: false
  });

  input.value = '';
  saveState();
  render();
});

// Event delegation for checkbox toggling and deletion
todoList.addEventListener('click', (e) => {
  const itemEl = e.target.closest('.todo-item');
  if (!itemEl) return;
  const id = itemEl.dataset.id;

  if (e.target.type === 'checkbox') {
    state.todos = state.todos.map(t => t.id === id ? { ...t, completed: e.target.checked } : t);
    saveState();
    render();
  } else if (e.target.classList.contains('delete-btn')) {
    state.todos = state.todos.filter(t => t.id !== id);
    saveState();
    render();
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    state.filter = btn.dataset.filter;
    render();
  });
});

clearCompletedBtn.addEventListener('click', () => {
  state.todos = state.todos.filter(t => !t.completed);
  saveState();
  render();
});

// Initial render
render();
