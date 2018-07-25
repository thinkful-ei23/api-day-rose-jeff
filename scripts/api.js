'use strict';
/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rose-jeff'; 
  const getItems = function(callback) {
  
    $.getJSON(BASE_URL + '/items' , (response) => {
      callback(response); 
    });
    

  };

  function createItem(name, callback) {
    const newItem = JSON.stringify({
      name,
    })
    $.ajax({
      contentType: 'application/json',
      url: BASE_URL + '/items',
      method: 'POST',
      data: newItem,
      success: callback,
    });
  }

  return {
    getItems,
    createItem
  };
}());




