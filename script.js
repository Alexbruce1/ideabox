var $title = $('#title-input');
var $body = $('#body-input');
var $submit = $('.submit-button');
var ideaArray = [];
var blankArray =[];
var articleSection = $('article');
var parsedIdeaList;
var thisObjId;
var theArray;
var idea;
$('article').on('click', '.delete-button', deleteIdea);
$('article').on('click', '.upvote-button', upvoteIdea);
$('article').on('click', '.downvote-button', downvoteIdea);

$submit.on('click', makeIdea);

  // constructor function for ideas:

  function Idea(title,body,id) {
      this.title = title;
      this.body = body;
      this.qualVal = 0;
      this.quality = 'Swill';
      this.id = Date.now();
  }

  function makeIdea(event){
    event.preventDefault();
    //using the constructor function to create a new object
    var userIdea = new Idea($title.val(),$body.val());
    ideaArray.push(userIdea);
    var stringifiedArray = JSON.stringify(ideaArray);
    // set that stringified object into local storage with a key set from the date.now method.
    localStorage.setItem('ideas', stringifiedArray);
    //as soon as we put that item into local storage we get it back
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    //and then we parse it from the json string into js
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    //and now we want to take that object and post it to the dom
    addIdeaToDom(parsedArray);
    };

    function addIdeaToDom(parsedArray){
      // console.log(object.title);
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
      // console.log(idea);
      $('article').prepend(idea);
    
  })};

  function logSomething() {
    console.log('something');
  };

  function deleteIdea(){
    // console.log($(this).data("id"));
    var thisObjectsDataID = $(this).data("id");
    // console.log(thisObjectsDataID);

    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    var newArray = parsedArray.filter(function(obj){
      console.log(parsedArray);
      console.log(obj.id);
      return obj.id !== thisObjectsDataID
    });
    var newStringifiedArray = JSON.stringify(newArray);
    // set that stringified object into local storage with a key set from the date.now method.
    localStorage.setItem('ideas', newStringifiedArray);
    //as soon as we put that item into local storage we get it back
    var arrayFromLocalStorage = localStorage.getItem('ideas');
    //and then we parse it from the json string into js
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    //and now we want to take that object and post it to the dom
    addIdeaToDom(blankArray);
    addIdeaToDom(parsedArray);
    // console.log(thisObjectsDataID);
    // console.log(newArray);
    // $(this).closest('article').remove('article');
  }

  function upvoteIdea(){
    // console.log($(this).data("id"));
    var thisObjectsDataID = $(this).data("id");
    // console.log(thisObjectsDataID);

    var arrayFromLocalStorage = localStorage.getItem('ideas');
    var parsedArray = jQuery.parseJSON(arrayFromLocalStorage);
    var newArray = parsedArray.map(
      if (this.id === thisObjectsDataID){
        if (this.quality === 'Swill'){
          this.quality = "Plausible";
      } else if (this.quality === 'Plausible'){
        this.quality = "Genius";
      // return obj.id !== thisObjectsDataID
    }
    console.log(newArray);
  );

    console.log(thisObjectsDataID);

    //get this item from local storage. 
    var ideaToUpvote = jQuery.parseJSON(localStorage.getItem(thisObjectsDataID));
    if (ideaToUpvote.quality === 'Swill'){
      ideaToUpvote.quality = 'Plausible';
      $(this).closest('span').val('Plausible');
      //restringify this object and put it back into local storage
      // $(this).child('.idea-rating').val('Plausible');
      $()
    } else if ( ideaToUpvote.quality === 'Plausible' ){
    ideaToUpvote.quality = 'Genius';
    $(this).closest('.idea-rating').val('Plausible');
    }
    console.log(ideaToUpvote);
    //change the value of the objects quality.
      // if the quality is at genius dont change
      // if the quality is at plausible => genius.
      // if the quality is at swill => plausible. 

    // add changed object back to local storage.
    
    // make the change in the dom to that object.

  
  }

   function downvoteIdea(){
    // console.log($(this).data("id"));
    var thisObjectsDataID = $(this).data("id");
    console.log(thisObjectsDataID);
        //get this item from local storage. 

    //change the value of its quality.
      // if the quality is at swill dont change
      // if the quality is at plausible => swill.
      // if the quality is at genius => plausible. 
    //

    // add changed object back to local storage.
    
    // make the change in the dom to that object.
  };
