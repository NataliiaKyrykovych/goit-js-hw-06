const formInput = document.querySelector("#name-input");
const formOutput = document.querySelector("#name-output");


formInput.addEventListener("input", onTextInput);

function onTextInput(event) {
    nameOutput.textContent = event.currentTarget.value;
};




