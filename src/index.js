const mailInput = document.querySelector('input');
const submitButton = document.querySelector('#submit-button');
const form = document.querySelector('.form__container');
const wrongPopUp = document.querySelector('#wrong-pop-up');
const successfulPopUp = document.querySelector('#successful-pop-up');
const wrongBtn = document.querySelector('#wrong-btn');
const successfulBtn = document.querySelector('#successful-btn');

let wrongInterval
let successfulInterval
let wrongTimeout;
let successfulTimeout;
form.addEventListener('submit', function(event) {
   event.preventDefault();
   let email = mailInput.value;
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const wrongBar = document.getElementById('wrong-bar');
   const successfulBar = document.getElementById('successful-bar');
   const forgot = document.querySelector('#forgot-message');

   wrongBar.value = 100;
   successfulBar.value = 100;
   clearInterval(wrongInterval);
   clearInterval(successfulInterval);
   clearTimeout(wrongTimeout);
   clearTimeout(successfulTimeout);
   wrongInterval = setInterval(() => {
      wrongBar.value--;
      if (wrongBar.value === 0) {
        clearInterval(wrongInterval);
      }
    }, 50);

    successfulInterval = setInterval(() => {
      successfulBar.value--;
      if (successfulBar.value === 0) {
        clearInterval(successfulInterval);
      }
    }, 50);


   // Check if the email is valid
   if (regex.test(email)) {
      submitButton.classList.remove('btn__not-submitted');
      successfulPopUp.classList.remove('hidden__alert');
      wrongPopUp.classList.add('hidden__alert');
      const userMail = document.querySelector('#user-mail');
      userMail.innerHTML = email;
      form.reset();
      clearTimeout(successfulTimeout);
      successfulTimeout = setTimeout(function() {
         successfulPopUp.classList.add('hidden__alert');
      },5000)
   } else {
      submitButton.classList.add('btn__not-submitted');
      wrongPopUp.classList.remove('hidden__alert');
      successfulPopUp.classList.add('hidden__alert');
      clearTimeout(wrongTimeout);
      wrongTimeout = setTimeout(function() {
         wrongPopUp.classList.add('hidden__alert');
      },5000)
   }

   if(email === "") {
      forgot.classList.remove('visually-hidden');
      forgot.classList.remove('not-showed');
      forgot.classList.add('is-showed');
      mailInput.classList.remove('submitted');
      mailInput.classList.add('not-submitted');
   }else{
      forgot.classList.remove('is-showed');
      forgot.classList.add('visually-hidden');
   }
});

mailInput.addEventListener('input', event => {
   event.preventDefault();
   let email = mailInput.value;
   const error = document.querySelector('#error-message');
   const forgot = document.querySelector('#forgot-message');

   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(email === '') {
      forgot.classList.remove('visually-hidden');
      forgot.classList.remove('not-showed');
      forgot.classList.add('is-showed');
      error.classList.remove('is-showed');
      error.classList.add('not-showed');
      error.classList.add('visually-hidden');
   } else if (regex.test(email)) {
      forgot.classList.remove('is-showed');
      forgot.classList.add('visually-hidden');
      mailInput.classList.remove('not-submitted');
      mailInput.classList.add('submitted');
      submitButton.classList.remove('btn__not-submitted');
      error.classList.remove('is-showed');
      error.classList.add('not-showed');
      error.classList.add('visually-hidden');
   } else {
      forgot.classList.remove('is-showed');
      forgot.classList.add('not-showed');
      forgot.classList.add('visually-hidden');
      mailInput.classList.remove('submitted');
      mailInput.classList.add('not-submitted');
      submitButton.classList.add('btn__not-submitted');
      error.classList.remove('visually-hidden');
      error.classList.remove('not-showed');
      error.classList.add('is-showed');
   }

})

wrongBtn.addEventListener('click', function(event) {
   event.preventDefault();
   wrongPopUp.classList.add('hidden__alert');
})

successfulBtn.addEventListener('click', event => {
   event.preventDefault();
   successfulPopUp.classList.add('hidden__alert');
})

/* mailInput.addEventListener('click', function() {
   mailInput.style.borderColor = 'var(--pale-blue)';
}) */
