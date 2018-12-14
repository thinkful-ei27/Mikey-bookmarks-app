'use strict';
/*global store, $*/

const bookmarkList = (function(){

  function generateFormNavigation() {
    if(store.newSubmitform === true){
      return `
      <section class="expanded-form">
      <form class="js-add-bookmark">
       <fieldset>
         <legend>Add Bookmark</legend>
           <div class="input-group"></div>
             <label for="title">Bookmark Title</label>
             <input type="text" placeholder="insert Title here">
           <div class="input-group"></div>
             <label for="title">Bookmark  URL</label>
             <input type="text" placeholder="insert URL here">
           <div class="input-group">
             <label for="title">Description</label>
             <input type="text" placeholder="write a short description">
           </div>
           <div class="input-group">
             <label for="rating">Rate this bookmark</label><br>
             <input type="radio" name="rating" value="5"> 5
             <input type="radio" name="rating" value="4"> 4
             <input type="radio" name="rating" value="3" selected="selected"> 3
             <input type="radio" name="rating" value="2"> 2
             <input type="radio" name="rating" value="1"> 1
           </div>
           <label for="submit-button">Submit new bookmark:</label>
           <button type"submit" name="submit">Submit</button>
        </fieldset>
      </form>
   <button class="js-form-expansion"name="cancel">cancel</button>   
</section>`;
    }
    return `<section class="contracted-form">
    <label for="form-expansion">Submit new Bookmark:</label>
    <button class="js-form-expansion">Click to Expand</button>    
    <br>
    <label for="rating">Filter by minimum rating:</label>
         <input class="rating" type="radio" name="rating" value="5"> 5
         <input class="rating" type="radio" name="rating" value="4"> 4
         <input class="rating" type="radio" name="rating" value="3"> 3
         <input class="rating" type="radio" name="rating" value="2"> 2
         <input class="rating" type="radio" name="rating" value="1" selected="selected"> 1
</section>`;

  }
  
  function generateItemElement(item){
    if(item.expanded === false){
      return `
      <li class="js-list-item" data-item-id="${item.id}">
      <div class="contracted">
      <div class="heading"><h3>${item.title}</h3>
      <button class="expand" name="expand">expand</button></div>
        <span class="rating">Rating = ${item.rating}</span>
      </div>
    </li>`;
    }
    return `
    <li class="js-list-item" data-item-id="${item.id}">
    <div class="expanded">
      <div class="heading"><h3>${item.title}</h3>
      <button class="expand" name="expand">minimize</button></div>
      <span class="description"> ${item.desc}</span><br>
      <span class="rating">Rating = ${item.rating}</span>
      <button class="js-visit-URL" name="visit-URL">Visit Site</button><br>
      <button name="delete" class="delete-button">Delete</button> 
    </div>
  </li>`;

    // if item expanded is true, desplay expanded html
    // the error message display also happens here
 
  }

  function generateBookmarkItemsString(bookmarks) { 
    const htmlArray =  bookmarks.map(function(item){
      return generateItemElement(item);
    });
    const htmlString = '';
    return htmlString.concat(htmlArray);

  }
  
  // i think the problem here was an order of oeprations one?
  //  perhaps has to happen through render


  // // map over the store.items and apply generateitemelements, then concatenate
  
  


  function render(){
    
    
    const filteredItems = store.items.filter(item => {
      return item.rating >= store.minimumRating;
    });
   
    const bookmarks = filteredItems;
    const formString = generateFormNavigation();
    const listString = generateBookmarkItemsString(bookmarks);
    //  insert into dom
    $('#form-container').html(formString);
    $('.js-list').html(listString);
  }

  function getItemIdFromElement(item){
    const id =  $(item)
      .closest('.js-list-item').data('item-id');
    return id;
    // id is stored in the element, for store access

  }

  function handleNewSubmitToggle(){
    $('#form-container').on('click', '.js-form-expansion',()=>{
      store.expandForm();
      render();
    });
  }


  function handleBookmarkExpand() {
    $('.js-list').on('click', '.expand', (event) => {
      const id = getItemIdFromElement(event.currentTarget);
      store.findAndExpand(id);
      render();
    });
  }

  function handleVisitSite() {
    $('.js-list').on('click', '.js-visit-URL', (event)=>{
      const id = getItemIdFromElement(event.currentTarget);
      store.findAndOpenPage(id);
    });
  }
  
  function handleSetMinRating() {
    $('#form-container').on('click', '.rating', (event)=>{
      const item = event.currentTarget;
      const rating = $(item).attr('value');
      store.setMinimumRating(rating);
  
    });

  }
  

  function handleNewItemSubmit(){
    $('#form-container').submit( );
    // accesss the
  }

  function handleDeleteButtonClicked(){
    // api delete request
  }

   

  
  function bindEventListeners(){
    handleNewSubmitToggle();
    handleNewItemSubmit();
    handleBookmarkExpand();
    handleVisitSite();
    handleSetMinRating();
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };

}());