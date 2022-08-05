let button = document.getElementById('submit-btn')
button.addEventListener('click', function (event){
    event.preventDefault();
})

let button2 = document.getElementById('clear-btn');
button2.addEventListener('click', clearFields);

const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);

function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
  }


