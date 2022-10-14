const refs = {
  body: document.querySelector('body'),
  colorHex: document.querySelector('.color'),
  changerBtn: document.querySelector('.change-color'),
};

refs.changerBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.colorHex.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.