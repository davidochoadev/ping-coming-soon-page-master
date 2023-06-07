const mailInput = document.querySelector('input');
const submitButton = document.querySelector('button');
const form = document.querySelector('.form__container');

form.addEventListener('submit', function(event) {
   event.preventDefault();
   let email = mailInput.value;
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // Check if the email is valid
   if (regex.test(email)) {
      console.log(`The email: ${email} is valid`);
      submitButton.classList.remove('btn__not-submitted');
      submitButton.classList.add('btn__submitted');
   } else {
      console.log(`The email: ${email} is not valid`);
      submitButton.classList.remove('btn__submitted');
      submitButton.classList.add('btn__not-submitted');
   }
});

mailInput.addEventListener('input', event => {
   event.preventDefault();
   let email = mailInput.value;
   let error = document.querySelector('#error-message');
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (regex.test(email)) {
      mailInput.classList.remove('not-submitted');
      mailInput.classList.add('submitted');
      submitButton.classList.remove('btn__not-submitted');
      error.classList.remove('is-showed');
      error.classList.add('not-showed');
   } else {
      mailInput.classList.remove('submitted');
      mailInput.classList.add('not-submitted');
      submitButton.classList.add('btn__not-submitted');
      error.classList.remove('visually-hidden');
      error.classList.remove('not-showed');
      error.classList.add('is-showed');
   }
})

/* mailInput.addEventListener('click', function() {
   mailInput.style.borderColor = 'var(--pale-blue)';
}) */
