const emailErrorText = document.querySelector('.email-error-text')
const inputError = document.querySelector('.input')
const btnEmailValid = document.querySelector('.btn-s')

emailErrorText.classList.add('email-error-text-hidden')

btnEmailValid.addEventListener('click', function () {
    const checkValidation = document.querySelector("input").validity.valid
  if (!checkValidation ) {
       emailErrorText.classList.remove('email-error-text-hidden')
    inputError.classList.add('input-error')
  } else  {
      emailErrorText.classList.add('email-error-text-hidden')
    inputError.classList.remove('input-error')
  }
})



