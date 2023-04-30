const input = document.querySelector('#validation-input');
const validationInput = +input.dataset.length;

input.addEventListener('blur', onCheckLength);


function onCheckLength(event) {
    const symbolsLength = event.target.value.trim().length;

    if (symbolsLength === validationInput) {
        input.classList.add('valid');
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
}