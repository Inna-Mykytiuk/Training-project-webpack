// бібліотека форматування дати
import moment from 'moment';

//розмітка яку вставлємо
const getTemplate = value => `
<div class="clock">
  <p class="text">${value}</p>
</div>`;

export class Clock {
  constructor({ selector }) {
    //батьківський ел. куди вставимо розмітку
    this.parent = document.querySelector(selector);

    //робимо рендер(прописали, після(ПРП) this.parent.insertAdjacentHTML = ('beforend', getTemplate());)
    this.render();
    this.text = this.parent.querySelector('.text');

    this.updateValue();
    this.start();
  }

  //реалізує відтворення розмітки
  render() {
    //очищаємо батьківський елемент
    this.parent.innerHTML = '';
    //вставляємо розмітку яку нам повертає ф-я getTemplate
    this.parent.insertAdjacentHTML('beforeend', getTemplate(this.value));
  }

  //створимо функцію
  updateValue() {
    this.text.textContent = moment().format('DD.MM.YYYY HH:mm:ss');
  }

  // створюємо функції зупинки і відтворення
  start() {
    if (this.timerId) return;
    //задаємо інтревал
    this.timerId = setInterval(() => {
      this.updateValue();
    }, 1000);
  }

  stop() {
    // очищаємо інтервал
    clearInterval(this.timerId);
    this.timerId = undefined;
  }
}
