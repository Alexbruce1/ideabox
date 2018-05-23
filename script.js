var $title = $('#title-input');
var $body = $('#body-input');
var $submit = $('.submit-button');
var articleSection = $('article');
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

$submit.on('click', makeIdea);

  function Idea(title,body,id) {
      this.title = title;
      this.body = body;
      this.qualVal = 0;
      this.quality = 'Swill';
      this.id = Date.now();
  }

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
    } else if (localStorage.getItem('ideas') !== null)
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
  };

    function addIdeaToDom(parsedArray){
      console.log(parsedArray);
      $('article').html('');
      parsedArray.forEach(function(object){
      var idea = (`
      <div class="idea-title-header">
        <h2 contenteditable="true">${object.title}</h2>
        <button alt="delete-button" class="delete-button idea-button" data-id="${object.id}"></button>
      </div>
      <p contenteditable="true" data-id="${object.id}">${object.body}</p>
      <div class="voting-buttons">
        <button class="idea-button upvote-button" data-id="${object.id}"></button>
        <button class="idea-button downvote-button" data-id="${object.id}"></button>
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
    // var ideaArray = parsedArray2;
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
    // var parsedArray2 = parsedArray;
    var ideaArray = parsedArray
    var newArray = parsedArray.map(function(obj, i) {
      if (obj.id === thisObjectsDataID && obj.quality === "Plausible"){
        obj.quality = "Swill";
      } else if (obj.id === thisObjectsDataID && obj.quality === "Genius"){
        obj.quality = "Plausible";
      }})
    // var ideaArray = parsedArray2;
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('ideas', stringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    addIdeaToDom(parsedArray);
  };
