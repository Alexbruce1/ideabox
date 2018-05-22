var $title = $('#title-input');
var $body = $('.input-body');
var $submit = $('.submit-button');
var ideaArray = [];
var articleSection = $('article');

$submit.on('click', makeIdea);

  // constructor function for ideas:

  function Idea(title,body) {
      this.title = title;
      this.body = body;
      this.quality = 0;
      this.id = Date.now();
  }

  function makeIdea(event){
    event.preventDefault();
    var userIdea = new Idea($title.val(),$body.val());
    ideaArray.push(userIdea);
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('key', stringifiedArray);
    var arrayFromLocalStorage = localStorage.getItem("key");
    console.log(arrayFromLocalStorage);
    var parsedIdeaList = jQuery.parseJSON(arrayFromLocalStorage);
    // console.log(parsedIdeaList);
    parsedIdeaList.forEach(function(element) {
      console.log(element);
      addIdeaToList(parsedIdeaList);
    });
    // addIdeaToDom($title.val(),$body.val());
    // resetForm();
  }

  function addIdeaToList(theArray) {
    var ideaList = '';
    for (var i = (theArray.length - 1); i >= 0; i--) {
      ideaList += (`
      <div class="idea-title-header">
        <h2 contenteditable="true">${theArray[i].title}</h2>
        <button alt="delete-button" class="delete-button idea-button"></button>
      </div>
      <p contenteditable="true">${theArray[i]. body}</p>
      <div class="voting-buttons">
        <button class="idea-button upvote-button"></button>
        <button class="idea-button downvote-button"></button>
        <h3>quality: <span class="idea-rating">swill</span></h3>
      </div>
  `)
    };
    $('article').html(ideaList);
    
  }

// function resetForm(event) {
//   event.preventDefault();
//   $('#title-input').reset();
// }

  $('article').on('click', logSomething);

  function logSomething() {
      console.log('something');
  }