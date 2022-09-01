//  ? 1.1 Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const allLiEl = document.querySelectorAll('li.item');
console.log(allLiEl);
const countLiItem = allLiEl.length
console.log(`Кількість li.item: `, countLiItem);
// ? 1.2 Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const task_1_2 = allLiEl.forEach(el => {
  const elTitle = el.firstElementChild.textContent;
  const itemArray = el.querySelectorAll('li')
  
  return console.log(`Заголовок ${elTitle}, Кількість елментів li: ${itemArray.length}`);
});