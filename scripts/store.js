'use strict';
/*global bookmarkList */
const store = (function(){

  const MOCK_DATA =[{desc: 'My overlord',
    expanded: false,
    id: 'cjpmymvam00160kwnuzhct89v',
    rating: 5,
    title: 'google',
    url: 'https://www.google.com/',},
  {desc: 'tech news',
    expanded: false,
    id: 'cjpn7nohj001x0kwnw4vd1qdo',
    rating: 3,
    title: 'techmeme',
    url: 'https://www.techmeme.com/river'}
  ];

  const addExpandkey = function(item){
    item.expanded = false;
    addItem(item);
  
  };

  const addItem = function(item){
    store.items.push(item);
    
    // the api sends an array of item objects
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
    console.log(store.minimumRating);
  
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
    MOCK_DATA,
    findAndOpenPage,

   
  };
}());


