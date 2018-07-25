/* global shoppingList, store */
'use strict';
/* global $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

});

//store.items.push(Item.create('oranges'));




