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
           <button name="submit">Submit</button>
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
    <select name="rating" id="rating-dropdown">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1" selected="selected">1</option>
   </select>
</section>`;

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
    
    const formString = generateFormNavigation();
    
    //  insert into dom
    $('#form-container').html(formString);
  }

  function getItemIdFromElement(){
    // id is stored in the element, for store access

  }

  function handleNewSubmitToggle(){
    console.log('handleNewSubmitToggle ran');
    $('#form-container').on('click', '.js-form-expansion',()=>{
      console.log('form submit toggle clicked');
      store.expandForm();
      render();
    });

  }

  function handleNewItemSubmit(){
    // accesss the post request
  }

  function handleDeleteButtonClicked(){
    // api delete request
  }

   

  
  function bindEventListeners(){
    handleNewSubmitToggle();

  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };

}());