const inputRef = document.querySelector('#validation-input');

const unfocusBlur = event => {
    const { dataset, value } = event.target;
    const validLength = Number(dataset.length);
    if ( validLength === value.length) {
        changeClass('valid', 'invalid', event.target);
    } else {
        changeClass('invalid', 'valid', event.target);
    }
};

function changeClass(add, remove, el) {
    el.classList.add(add);
    el.classList.remove(remove);
}

inputRef.addEventListener('blur', unfocusBlur);





// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }