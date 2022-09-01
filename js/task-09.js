function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handleBtnEl = document.querySelector('.change-color');
console.log(handleBtnEl);
const colorSpanEl = document.querySelector('.color');
console.log(colorSpanEl);

handleBtnEl.addEventListener('click', () => {
  // ! Колір записую у нову змінну
  let newBodyBckgrndClr = getRandomHexColor();
  // ! Перезапис фонового кольору
  document.body.style.backgroundColor = newBodyBckgrndClr;
  // ! перезапис span text
  colorSpanEl.textContent = `${newBodyBckgrndClr}`;
});
