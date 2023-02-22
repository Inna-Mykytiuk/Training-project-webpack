import { v4 as uuidv4 } from 'uuid';
import сss from './styles.css';
import scss from './sass/main.scss';

const getTodo = ({ id, value, checked }) => `
  <li data-id=${id}>
    <input type="checkbox" ${checked ? 'checked' : ''} />
    <span>${value}</span>
    <button data-action="delete">x</button>
    <button data-action="view">view</button>
  </li>`;

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.todo-list'),
};

let todos = [];

const handleSubmit = event => {
  const input = event.target.elements.text;
  const { value } = input;
  const newTodo = { id: uuidv4(), value, checked: false };

  event.preventDefault();
  todos.push(newTodo);
  input.value = '';
  render();
};

const deleteTodo = id => {
  todos = todos.filter(todo => todo.id !== id);
  render();
};

const viewTodo = id => {
  console.log('view todo');
};

const handleTodoClick = event => {
  const { action } = event.target.dataset;
  const parent = event.target.closest('li');
  const { id } = parent?.dataset || {};

  switch (action) {
    case 'delete':
      deleteTodo(id);
      break;

    case 'view':
      viewTodo(id);
      break;
  }
};

const render = () => {
  const itemList = todos.map(todo => getTodo(todo)).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', itemList);
};

render();

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleTodoClick);
