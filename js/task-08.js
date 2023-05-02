const loginForm = document.querySelector('.login-form');
    
loginForm.addEventListener('submit', onSubmit);
const form = {};

function onSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please, all fields must be filled!');
  } else {
    form.email = email.value;
    form.password = password.value;

    console.log(form);
  }
  event.currentTarget.reset();
}
