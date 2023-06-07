const mailInput = document.querySelector('input');
const form = document.querySelector('.form__container');

form.addEventListener('submit', function(event) {
   event.preventDefault();
   let email = mailInput.value;
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // Check if the email is valid
   if (regex.test(email)) {
      console.log(`The email: ${email} is valid`);
      mailInput.classList.remove('not-submitted');
      mailInput.classList.add('submitted');
   } else {
      console.log(`The email: ${email} is not valid`);
      mailInput.classList.remove('submitted');
      mailInput.classList.add('not-submitted');
   }
});

mailInput.addEventListener('input', event => {
   event.preventDefault();
   let email = mailInput.value;
   let error = document.querySelector('#error-message');
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (regex.test(email)) {
      console.log(`The email: ${email} is valid`);
      mailInput.classList.remove('not-submitted');
      mailInput.classList.add('submitted');
      error.classList.remove('is-showed');
      error.classList.add('not-showed');
   } else {
      console.log(`The email: ${email} is not valid`);
      mailInput.classList.remove('submitted');
      mailInput.classList.add('not-submitted');
      error.classList.remove('visually-hidden');
      error.classList.remove('not-showed');
      error.classList.add('is-showed');
   }
})

/* mailInput.addEventListener('click', function() {
   mailInput.style.borderColor = 'var(--pale-blue)';
}) */
