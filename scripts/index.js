'use strict';
/*global bookmarkList, api, $*/


$(document).ready(function() {
 
  bookmarkList.bindEventListeners();
  bookmarkList.render();
  api.getItems();
 
});

