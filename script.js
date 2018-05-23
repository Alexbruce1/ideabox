var $title = $('#title-input');
var $body = $('.input-body');
var $submit = $('.submit-button');
var articleSection = $('article');
var $searchValue;
var ideaArray = [];
var blankArray =[];
var parsedIdeaList;
var parsedArray;
var parsedArray2;
var thisObjId;
var theArray;
var idea;
var newArray;
$('article').on('click', '.delete-button', deleteIdea);
$('article').on('click', '.upvote-button', upvoteIdea);
$('article').on('click', '.downvote-button', downvoteIdea);
$('article').on('focusout', 'h2', changeTitleContent);
$('article').on('focusout', 'p', changeBodyContent);
$(window).on( 'load', recreateSavedCards);



function changeTitleContent() {
  var thisObjectsDataID = $(this).data("id");
  var newContent = $(this).text();
  var arrayFromLocalStorage = localStorage.getItem('ideas');
  var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
  var ideaArray = parsedArray;
  var newArray = parsedArray.map(function(obj, i) {
    if (obj.id === thisObjectsDataID){
      obj.title = newContent;
    }})
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('ideas', stringifiedArray);
  var arrayFromLocalStorage = localStorage.getItem('ideas');
  var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
  addIdeaToDom(parsedArray);
}

function changeBodyContent() {
  var thisObjectsDataID = $(this).data("id");
  var newContent = $(this).text();
  console.log(newContent);
  var arrayFromLocalStorage = localStorage.getItem('ideas');
  var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
  var ideaArray = parsedArray;
  var newArray = parsedArray.map(function(obj, i) {
    if (obj.id === thisObjectsDataID){
      obj.body = newContent;
    }})
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('ideas', stringifiedArray);
  var arrayFromLocalStorage = localStorage.getItem('ideas');
  var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
  addIdeaToDom(parsedArray);
}

$('#search').on('keyup', function() {
  var g = $(this).val().toLowerCase();
  $('.title').each( function() {
      var s = $(this).text().toLowerCase();
      if (s.indexOf(g) != -1 ) {
          $(this).closest('article').show();
      }
      else {
        $(this).closest('article').hide();
      }
  });
})

function logSomething() {
console.log('something');
}

$submit.on('click', makeIdea);

function Idea(title,body,id) {
      this.title = title;
      this.body = body;
      this.qualVal = 0;
      this.quality = 'Swill';
      this.id = Date.now();
      this.upvoteId = ("upvote" + Date.now());
      this.downvoteId = ("downvote" + Date.now());
  }

  $(document).ready(function() {
    if (localStorage.getItem('ideas') !== null) {
      var arrayFromLocalStorage = localStorage.getItem('ideas');
      var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
      addIdeaToDom(parsedArray);
}});


  function makeIdea(event){
    if (localStorage.getItem('ideas') === null) {
    event.preventDefault();
    var userIdea = new Idea($title.val(),$body.val());
    ideaArray.push(userIdea);
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('ideas', stringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    addIdeaToDom(parsedArray);
    } else if (localStorage.getItem('ideas') !== null) {
    event.preventDefault();
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    var userIdea = new Idea($title.val(),$body.val());
    parsedArray.push(userIdea);
    var stringifiedArray = JSON.stringify(parsedArray);
    localStorage.setItem('ideas', stringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    addIdeaToDom(parsedArray);
    $title.val('');
    $body.val('');
    }
  };

    function addIdeaToDom(parsedArray){
      $('article').html('');
      parsedArray.forEach(function(object){
      var idea = (`

      <div class="idea-title-header">
        <h2 contenteditable="true" class="title">${object.title}</h2>
        <button alt="delete-button" class="delete-button idea-button" data-id="${object.id}"></button>
      </div>
      <p contenteditable="true" data-id="${object.id}" class="body">${object.body}</p>
      <div class="voting-buttons">
        <button class="idea-button upvote-button" data-id="${object.upvoteId}"></button>
        <button class="idea-button downvote-button" data-id="${object.downvoteId}"></button>
        <h3>quality: <span class="idea-rating">${object.quality}</span></h3>
      </div>
      `)
      $('article').prepend(idea);
    
  })};

  function deleteIdea(){
    var thisObjectsDataID = $(this).data("id");
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    var newArray = parsedArray.filter(function(obj){
      return obj.id !== thisObjectsDataID
    });
    var newStringifiedArray = JSON.stringify(newArray);
    localStorage.setItem('ideas', newStringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    addIdeaToDom(blankArray);
    addIdeaToDom(parsedArray);
  }

  function upvoteIdea(){
    var thisObjectsDataID = $(this).data("id");
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    var ideaArray = parsedArray;
    var newArray = parsedArray.map(function(obj, i) {
      if (obj.id === thisObjectsDataID && obj.quality === "Swill"){
        obj.quality = "Plausible";
      } else if (obj.id === thisObjectsDataID && obj.quality === "Plausible"){
        obj.quality = "Genius";
      }})
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('ideas', stringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    addIdeaToDom(parsedArray);
    }

   function downvoteIdea(){
    var thisObjectsDataID = $(this).data("id");
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    var ideaArray = parsedArray
    var newArray = parsedArray.map(function(obj, i) {
      if (obj.id === thisObjectsDataID && obj.quality === "Plausible"){
        obj.quality = "Swill";
      } else if (obj.id === thisObjectsDataID && obj.quality === "Genius"){
        obj.quality = "Plausible";
      }})
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('ideas', stringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    addIdeaToDom(parsedArray);
  };
