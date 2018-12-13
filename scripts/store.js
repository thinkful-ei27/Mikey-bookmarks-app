'use strict';
const store = (function(){

  const addExpandkey = function(obj){
    obj['expanded'] = false;
    addItem(obj);
    console.log(obj.expanded);
  };

  const addItem = function(item){
    // add items to this.items.push
    store.items.push(item);
  };
  
  const expandForm =function(){
    this.newSubmitform =!this.newSubmitform;
  };

  const findById = function(){
    // pass an id into the function, return the item from store.items     
  };
  const findAndUpdate = function(){
    // use findbyid to update assign the new information to the object in the store
  };
 
  const findAndExpand = function(){
  //  find by id, toggle the *storeonly* key of expanded element 
  };
  
  const setMinimumRating = function(){
    // recieves the data from the event listener and updates the minimum rating,
    // in the render function if rating is less than store.minimumrating, do not display
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
    minimumRating: 1,
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


  };
}());

console.log(store.items);
