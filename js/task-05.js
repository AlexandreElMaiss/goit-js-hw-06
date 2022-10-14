const ref = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

const changeNameOutput = event => {
    const { value } = event.target;
    ref.output.textContent = value ? value : 'Anonymous';
};

ref.input.addEventListener('input', changeNameOutput);













// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане 
// должна отображаться строка "Anonymous".