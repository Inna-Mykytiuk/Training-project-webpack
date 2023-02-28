//розмітка яку вставлємо
const getTemplate = value => `
<div class="timer">
  <p class="text">${value}</p>
  <button class="btn-stop">stop</button>
  <button class="btn-start">start</button>
</div>`;

export class Timer {
  constructor({ selector, start = 0 }) {
    //батьківський ел. куди вставимо розмітку
    this.parent = document.querySelector(selector);
    this.value = start;

    //робимо рендер(прописали, після(ПРП) this.parent.insertAdjacentHTML = ('beforend', getTemplate());)
    this.render();
    //додаємо кнопки
    this.startButton = this.parent.querySelector('.btn-start');
    this.stopButton = this.parent.querySelector('.btn-stop');
    this.text = this.parent.querySelector('.text');

    this.stopButton.disabled = true;

    //робимо підписку
    this.stopButton.addEventListener('click', this.stop.bind(this));
    this.startButton.addEventListener('click', this.start.bind(this));
  }

  //реалізує відтворення розмітки
  render() {
    //очищаємо батьківський елемент
    this.parent.innerHTML = '';
    //вставляємо розмітку яку нам повертає ф-я getTemplate
    this.parent.insertAdjacentHTML('beforeend', getTemplate(this.value));
  }

  //створимо функцію
  incrementValue() {
    this.value++;
    this.text.textContent = this.value;
  }

  // створюємо функції зупинки і відтворення
  start() {
    if (this.timerId) return;
    //робимо кнопку старту не активною
    this.startButton.disabled = true;
    //робимо кнопку стопу активною
    this.stopButton.disabled = false;
    //задаємо інтревал
    this.timerId = setInterval(() => {
      this.incrementValue();
    }, 1000);
  }

  stop() {
    // очищаємо інтервал
    clearInterval(this.timerId);
    //робимо кнопку старту активною
    this.startButton.disabled = false;
    //робимо кнопку стопу не активною
    this.stopButton.disabled = true;
    this.timerId = undefined;
  }
}
