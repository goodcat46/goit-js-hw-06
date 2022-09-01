const rangeInputEl = document.querySelector('#font-size-control')
console.log(rangeInputEl);
const textEl = document.querySelector('#text')
console.log(textEl);

rangeInputEl.addEventListener('input', event => {
  textEl.style.fontSize  = `${event.target.value}px`;
})




// const textFontSize = 25;

// textEl.style.fontSize  = `${textFontSize}px`;

