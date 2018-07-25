/* global shoppingList, store */
'use strict';
/* global $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  
  api.getItems((items) => {
    const item = items[0];
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
    api.updateItem(item.id, { name: 'foobar' }, () => {
      console.log('updated!');
    });
  });
});


  

//store.items.push(Item.create('oranges'));




