const logInFormEl = document.querySelector('.login-form');
// console.log(logInFormEl);
/*
? Управління формою
*/ 

logInFormEl.addEventListener('submit', event => {
  const inputEmail = logInFormEl.elements[0];
  // console.log(inputEmail);
  const inputPassword = logInFormEl.elements[1];
  // console.log(inputPassword);
  event.preventDefault();

  if (inputEmail.value.length && inputPassword.value.length !== 0) {
    const userLoginData = {
      [inputEmail.name]: inputEmail.value,
      password: inputPassword.value,
    };

    console.log(userLoginData);
    alert('Submited');
    event.target.reset();
    return;
  }
  alert('Заповніть усі поля');
  return;
});
