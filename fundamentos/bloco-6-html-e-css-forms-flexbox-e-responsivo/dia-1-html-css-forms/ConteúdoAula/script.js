// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function (event){
    event.preventDefault();
})

INPUT_CHECKBOX.addEventListener('click', function(event){
    event.key.preventDefault();
})

INPUT_TEXT.addEventListener('keypress', function(event){
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
})