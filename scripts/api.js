'use strict';
/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rose-jeff'; 
  const getItems = function(callback) {
  
    $.getJSON(BASE_URL + '/items' , (response) => {
      callback(response); 
    });
    

  };
  return {
    getItems
  };
}());




