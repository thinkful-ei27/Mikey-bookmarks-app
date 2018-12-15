'use strict';
/* global api, bookmarkList, $*/ 

const api = (function(){

  const BASE_URL =  'https://thinkful-list-api.herokuapp.com/mikey';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const createItem = function(name, callback){

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method:'POST',
      contentType :'application/json',
      data: name,
      success: callback,
      error : '',//work on this later//
      
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
      error : ''
    });
  };

  return{
    getItems,
    createItem,
    editItem,
    deleteItem,
  };


}());