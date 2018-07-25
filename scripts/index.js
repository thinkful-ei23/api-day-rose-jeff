/* global shoppingList, store */
'use strict';
/* global $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});


