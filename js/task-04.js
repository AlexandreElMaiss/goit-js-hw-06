const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}

const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('[data-action="increment"]')
const decrementRef = document.querySelector('[data-action="decrement"]')

incrementRef.addEventListener('click', () => {
    counterValue.increment();
    valueRef.textContent = counterValue.value;
})
decrementRef.addEventListener('click', () => {
    counterValue.decrement();
    valueRef.textContent = counterValue.value;
})



// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.