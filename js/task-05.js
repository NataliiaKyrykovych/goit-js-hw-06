const formInput = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output');




const onTextInput = (event) => {
    formOutput.textContent = formInput.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};

formInput.addEventListener('input', onTextInput);





