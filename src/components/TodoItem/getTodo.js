export const getTodo = ({ id, value, checked }) => `
  <li data-id=${id}>
    <input data-action="check" type="checkbox" ${checked ? 'checked' : ''} />
    <span>${value}</span>
    <button data-action="delete">x</button>
    <button data-action="view">view</button>
  </li>`;
