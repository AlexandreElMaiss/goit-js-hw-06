const refs = {
  divBoxes: document.querySelector('#boxes'),
  inputRef: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

refs.btnCreate.addEventListener('click', createEl);

refs.btnDestroy.addEventListener('click', () => {
  const markupTab = [];
  { const markupEl = `<div></div>`;
    markupTab.push(markupEl); }
  refs.divBoxes.innerHTML = markupTab.join('');
});

refs.inputRef.addEventListener('input', event => {
  event.currentTarget.value;
});

const markupTab = [];
function createEl() {
  for (let i = 0; i < refs.inputRef.value; i += 1) {
    const markupEl = `<div class="box__item" style="background-color: ${getRandomHexColor()}; 
    width: ${30 + i * 10}px; height: ${30 + i * 10}px;"></div>`;
    markupTab.push(markupEl);
  }
  refs.divBoxes.innerHTML = markupTab.join('');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую 
// функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.