'use strict';
/* global api, store, bookmarkList $*/ 

const api = (function(){

  const BASE_URL =  'https://thinkful-list-api.herokuapp.com/mikey';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };


  const errorCallback = function(){
    store.error = 'error';
    bookmarkList.render();
  };

  const createItem = function(name, callback){

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method:'POST',
      contentType :'application/json',
      data: name,
      success: callback,
      error : errorCallback
      
    });

  };
  
  const editItem = function(){
  // ajax patch
  };
  const deleteItem = function(id , callback){
    $.ajax({
      url : `${BASE_URL}/bookmarks/${id}`,
      method : 'DELETE',
      contentType : 'aplication/json',
      success : callback,
    });
  };

  return{
    getItems,
    createItem,
    editItem,
    deleteItem,
  };


}());