'use strict';
/* global $*/ 

const api = (function(){

  const BASE_URL =  'https://thinkful-list-api.herokuapp.com/mikey';

  const getItems = function(){
    $.getJSON(`${BASE_URL}/bookmarks`, () =>{
      console.log('GET worked)');});
  };
  const createItem = function(){
    // JSON stringify then ajax post
  };
  
  const editItem = function(){
  // ajax patch
  };
  const deleteItem = function(){
  //ajax delete
  };

  return{
    getItems,
    createItem,
    editItem,
    deleteItem,
  };


}());