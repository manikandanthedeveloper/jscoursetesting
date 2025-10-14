const breakfastMenu = [
    { name: 'Pancakes', price: 12 },
    { name: 'Eggs Benedict', price: 22.99 },
    { name: 'Oatmeal', price: 21.99 },
    { name: 'Frittata', price: 15 }
  ];
  
  const mainCourseMenu = [
    { name: 'Steak', price: 35 },
    { name: 'Pasta', price: 22 },
    { name: 'Burger', price: 18 },
    { name: 'Salmon', price: 29 }
  ];
  
  const dessertMenu = [
    { name: 'Cake', price: 12 },
    { name: 'Ice Cream', price: 10 },
    { name: 'Pudding', price: 9 },
    { name: 'Fruit Salad', price: 8 }
  ];
  
  // 🍳 BREAKFAST
  const breakfastTotalItemsHTML = document.getElementById('breakfastTotalItems');
  const breakfastMenuItemsHTML = document.getElementById('breakfastMenuItems');
  
  const breakfastMenuItems = breakfastMenu
    .map((item, index) => `<p>Item ${index + 1}: ${item.name} - $${item.price.toFixed(2)}</p>`)
    .join('');
  
  breakfastTotalItemsHTML.innerHTML = `Total Items: ${breakfastMenu.length}`;
  breakfastMenuItemsHTML.innerHTML = breakfastMenuItems;
  
  
  // 🍝 MAIN COURSE
  const maincourseMenuItemsHTML = document.getElementById('maincourseMenuItems');
  const maincourseTotalItemsHTML = document.getElementById('maincourseTotalItems');
  
  let mainCourseItem = '';
  maincourseTotalItemsHTML.innerHTML = `Total Items: ${mainCourseMenu.length}`;
  mainCourseMenu.forEach(
    (item, index) => mainCourseItem += `<p>Item ${index + 1}: ${item.name} - $${item.price.toFixed(2)}</p>`
  );
  maincourseMenuItemsHTML.innerHTML = mainCourseItem;
  
  
  // 🍰 DESSERT
  const dessertTotalItemsHTML = document.getElementById('dessertTotalItems');
  const dessertMenuItemsHTML = document.getElementById('dessertMenuItems');
  
  let dessertItem = '';
  dessertTotalItemsHTML.innerHTML = `Total Items: ${dessertMenu.length}`;
  for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i].name} - $${dessertMenu[i].price.toFixed(2)}</p>`;
  }
  dessertMenuItemsHTML.innerHTML = dessertItem;