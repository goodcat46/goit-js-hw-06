const btnDecreamentEl = document.querySelector(`[data-action="decrement"]`);
console.log(btnDecreamentEl);
const btnIncreamentEl = document.querySelector(`[data-action="increment"]`);
console.log(btnIncreamentEl);
const counterEl = document.querySelector(`[id="value"]`);
console.log(counterEl);

let counterValue = 0;

btnDecreamentEl.addEventListener('click', el => {
  counterEl.textContent = counterValue -= 1;
});
btnIncreamentEl.addEventListener('click', el => {
  counterEl.textContent = counterValue += 1;
});
