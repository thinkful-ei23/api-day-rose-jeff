/* global shoppingList, store */
'use strict';
/* global $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));




