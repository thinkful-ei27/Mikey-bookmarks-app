'use strict';
/* global $*/ 

const api = (function(){

  const BASE_URL =  'https://thinkful-list-api.herokuapp.com/mikey';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({name});
  
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method:'POST',
      contentType :'application/json',
      data: newItem,
      success: callback,
      error : '',//work on this later//
      

    });
  
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