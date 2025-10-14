const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItems = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
const breakfastTotalItemsHTML = document.getElementById('breakfastTotalItems');
const breakfastMenuItemsHTML = document.getElementById('breakfastMenuItems');
breakfastTotalItemsHTML.innerHTML = `Total Items: ${breakfastMenu.length}`;
breakfastMenuItemsHTML.innerHTML = breakfastMenuItems;


let mainCourseItem = '';
const maincourseMenuItemsHTML = document.getElementById('maincourseMenuItems');
const maincourseTotalItemsHTML = document.getElementById('maincourseTotalItems');

maincourseTotalItemsHTML.innerHTML = `Total Items: ${mainCourseMenu.length}`;
mainCourseMenu.forEach((item, index) =>  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`);
maincourseMenuItemsHTML.innerHTML = mainCourseItem;


const dessertTotalItemsHTML = document.getElementById('dessertTotalItems');
const dessertMenuItemsHTML = document.getElementById('dessertMenuItems');

let dessertItem = '';
dessertTotalItemsHTML.innerHTML = `Total Items: ${dessertMenu.length}`;
for(let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

dessertMenuItemsHTML.innerHTML = dessertItem;