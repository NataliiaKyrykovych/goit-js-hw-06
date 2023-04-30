const inputFontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


function fontSizeControl(event) {
    textSize.style.fontSize = event.currentTarget.value + 'px';
}

inputFontSize.addEventListener('input', fontSizeControl);