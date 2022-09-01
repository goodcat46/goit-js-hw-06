const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);



inputEl.addEventListener('input', event => {
  if(event.target.value === '') {
    outputEl.textContent = 'Anonymous'
    return
  }
  outputEl.textContent = event.target.value
});
