'use strict';
/*global bookmarkList */
const store = (function(){

  const addExpandkey = function(item){
    item.expanded = false;
    addItem(item);
  
  };

  const addItem = function(item){
    store.items.push(item);
  };
  
  const expandForm =function(){
    this.newSubmitform =!this.newSubmitform;
  };

  const findById = function(id){
    const foundItem = store.items.find(function(item){
      if(item.id === id){
        return item;}
      return;
    });
    return foundItem;
    // pass an id into the function, return the item from store.items     
  };

  const findAndUpdate = function(){
    // use findbyid to update assign the new information to the object in the store
  };
 
  const findAndExpand = function(id){
    const item = findById(id);
    item.expanded = !item.expanded;
  //  find by id, toggle the *storeonly* key of expanded element 
  };
  
  const findAndOpenPage =function(id){
    const item = findById(id);
    window.open(item.url);
  };
  
  const setMinimumRating = function(num){
    store.minimumRating = num;
  };

  const findAndDelete = function(){
    // filter the items array and 
  };

  const errorMessage = function(){ 
    // recieves the callback error from the ajax request 
    // edits the error on the store object,
    // later build html based upon wether the error message is toggled or night
  };



  return { 
    items: [],
    newSubmitform: false,
    minimumRating: null,
    error: null,

    addExpandkey,
    addItem,
    findById,
    findAndUpdate,
    findAndExpand,
    setMinimumRating,
    findAndDelete,
    errorMessage,
    expandForm,
    findAndOpenPage,
    
  };
}());


