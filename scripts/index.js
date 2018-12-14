'use strict';
/*global bookmarkList, api, store $*/


$(document).ready(function() {
  bookmarkList.bindEventListeners();
  bookmarkList.render();
  api.getItems((items)=>{
    items.map(item=>store.addExpandkey(item));
    bookmarkList.render();
  });


 
});

