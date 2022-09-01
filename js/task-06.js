const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
inputEl.classList.add('validation-input');
inputEl.addEventListener('blur', event => {
  // console.log(event.target.value);
  // console.log(event.target.value.length);
  // console.log(Number(event.target.dataset.length));
  if (event.target.value.length !== Number(event.target.dataset.length)) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    alert('Goodbye');
    return
  }
  inputEl.classList.remove('invalid');
  inputEl.classList.add('valid');
  alert('Wellcome');
});
