'use strict';

const bookmarkList = (function(){

  function generateFormNavigation() {
    // if the newsubmitform  is true, then  generate the submit form
    // cancel also toggles the newsubmitform button on the submit form
    // otherwise generate the button that toggles the form along with the ratings filter

  }
  
  function generateItemElement(){
  // if item expanded is true, desplay expanded html
  // the error message display also happens here
  //otherwise the 
  // perhaps split into multiple generate item
  }

  function generateBookmarkItemsString() {
  
    // map over the store.items and apply generateitemelements, then concatenate
  
  }

  function render(){
    // if item.rating< store.minimumrating do not display item with filter
    //  insert into dom

  }

  function getItemIdFromElement(){
    // id is stored in the element, for store access

  }

  function handleNewSubmitToggle(){

  }

  function handleNewItemSubmit(){
    // accesss the post request
  }

  function handleDeleteButtonClicked(){
    // api delete request
  }

   

  
  function bindEventListeners(){


  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };

}());