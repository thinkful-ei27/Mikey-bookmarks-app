'use strict';
/*global bookmarkList, api, store $*/


$(document).ready(function() {
 
  bookmarkList.bindEventListeners();
  bookmarkList.render();
  api.getItems(store.addItem);
 
});

