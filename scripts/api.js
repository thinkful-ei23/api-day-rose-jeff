'use strict';
/* global $ */

const api = (function() {
  const API_KEY =  'https://thinkful-list-api.herokuapp.com/rose-jeff/items';
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rose-jeff'; 
  const getItems = function(callback) {
    callback('api module works!');
    
  };
  return {
    getItems
  };
}());




