function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handleBtnEl = document.querySelector('.change-color');
console.log(handleBtnEl);
const colorSpanEl = document.querySelector('.color');
console.log(colorSpanEl);

colorSpanEl.textContent = 'sfdsdfgsdf'
