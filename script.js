var $title = $('#title-input');
var $body = $('.input-body');
var $submit = $('.submit-button');
var ideaArray = [];
var articleSection = $('article');
var parsedIdeaList;
var thisObjId;
var theArray;
var idea;

$submit.on('click', clearForm);
$('article').on('click', '.delete-button', deleteIdea);
$('article').on('click', '.upvote-button', upvoteIdea);
$('article').on('click', '.downvote-button', downvoteIdea);
$(window).on( 'load', recreateSavedCards);


function recreateSavedCards() {
  for (var i = localStorage.length - 1; i >= 0; i--) {
    var pullCard = localStorage.getItem(localStorage.key(i));
    var parsedCard = JSON.parse(pullCard);
    addIdeaToDom(parsedCard);
  }
}

$submit.on('click', makeIdea);

  // constructor function for ideas:

function Idea(title,body,id) {
      this.title = title;
      this.body = body;
      this.qualVal = 0;
      this.quality = 'Swill';
      this.id = Date.now();
      this.upvoteId = ("upvote" + Date.now());
      this.downvoteId = ("downvote" + Date.now());
  }

function clearForm() {
  $('.main-form').each(function() {
    this.reset();
  });
}

function makeIdea(event){
  event.preventDefault();
  //using the constructor function to create a new object
  var userIdea = new Idea($title.val(),$body.val());
  // ideaArray.push(userIdea);
  // var stringifiedArray = JSON.stringify(ideaArray);
  // stringifying that idea object with json
  var stringifiedIdea = JSON.stringify(userIdea);
  // creating a local variable from the date.now function which will serve as a unique identifier.
  var id = Date.now();
  downvoteId = ("downvote" + Date.now());
  // set that stringified object into local storage with a key set from the date.now method.
  localStorage.setItem(id, stringifiedIdea);
  //as soon as we put that item into local storage we get it back
  var ideaFromLocalStorage = localStorage.getItem(id);
  //and then we parse it from the json string into js
  var parsedIdea = jQuery.parseJSON(ideaFromLocalStorage);
  //and now we want to take that object and post it to the dom
  addIdeaToDom(parsedIdea);
  };

  function addIdeaToDom(object){
    // console.log(object.id);
    // console.log(object.title);
    var idea = (`
      <div class="idea-title-header">
        <h2 contenteditable="true">${object.title}</h2>
        <button alt="delete-button" class="delete-button idea-button" data-id="${object.id}"></button>
      </div>
      <p contenteditable="true" data-id="${object.id}">${object.body}</p>
      <div class="voting-buttons">
        <button class="idea-button upvote-button" data-id="${object.upvoteId}"></button>
        <button class="idea-button downvote-button" data-id="${object.downvoteId}"></button>
        <h3>quality: <span class="idea-rating">${object.quality}</span></h3>
      </div>
`)
// console.log(idea);
$('article').prepend(idea);
  }

function logSomething() {
  console.log('something');
}


function deleteIdea(){
  // console.log($(this).data("id"));
  var thisObjectsDataID = $(this).data("id");
  // console.log(thisObjectsDataID);
  localStorage.removeItem(thisObjectsDataID);
  // console.log(objectToDelete);
  $(this).closest('article').remove('article');
}

function upvoteIdea(){
  // console.log($(this).data("id"));
  var thisObjectsDataID = $(this).data("id");
  console.log(thisObjectsDataID);
}

 function downvoteIdea(){
  // console.log($(this).data("id"));
  var thisObjectsDataID = $(this).data("id");
  console.log(thisObjectsDataID);
}



    // parsedIdeaList.forEach(function(element) {
    //    if (this.id === parsedIdeaList.id) {
    //      console.log('yup');
    //    }
    //    else {
    //      console.log('nope');
    //    }
    // // var thisObjId = this.id;
    // // var foo = $.inArray(parseInt(thisObjId), ideaArray);
    // console.log(foo);
    // console.log(thisObjId);
    // console.log(ideaArray);
  
  // function deleteIdea() {
  //   var thisObjId = this.id;
  //   var theArray = parsedIdeaList.filter(thisObjId);
  //     if (obj.id != thisObjId) {
  //     console.log(theArray);
  //   };
  //   console.log(thisObjId);

  // };

  // function deleteIdea() {
  //   var thisObjId = this.id;
  //   $(this).closest('article').remove('article');
  //   var updatedList = ideaArray.filter(function (obj) {
  //     return obj.id != thisObjId;
  //     console.log(obj.id);
  //   });
  //   parsedIdeaList = updatedList;
  //   console.log(ideaArray);
    // var listItemsStringed = JSON.stringify(linkedList);
    // localStorage.setItem('list', listItemsStringed);
    // updateTally();
  // }