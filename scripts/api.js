'use strict';
/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rose-jeff'; 
  const getItems = function(item) {
    this.items = item;
    //$.getJSON(BASE_URL + '/items' , (response) => {
    //  callback(response); 
    //});
    

  };

  function createItem(name, callback) {
    const newItem = JSON.stringify({
      name,
    });
    $.ajax({
      contentType: 'application/json',
      url: BASE_URL + '/items',
      method: 'POST',
      data: newItem,
      success: callback,
    });
  }

  function updateItem(id, updateData, callback) {
    const data = JSON.stringify({
      updateData,
    });
    $.ajax({
      url: BASE_URL + '/items/' + id, 
      //url: $`{BASE_URL}/items/{id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: data, 
      success: callback,
    });
  }

  return {
    getItems,
    createItem,
    updateItem
  };
}());




