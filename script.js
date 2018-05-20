var $title = $('#title-input');
var $body = $('#body-input');
var $submit = $('.submit-button');
var ideaArray = [];

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
    // addIdeaToDom($title.val(),$body.val());
    // resetForm();
  }

  function addIdeaToDom(title, body) {
    var ideaInList = (`
        <div class="idea-title-header">
          <h2 contenteditable="true">${title}</h2>
          <button alt="delete-button" class="delete-button idea-button"></button>
        </div>
        <p contenteditable="true">${body}</p>
        <div class="voting-buttons">
          <button class="idea-button upvote-button"></button>
          <button class="idea-button downvote-button"></button>
          <h3>quality: <span class="idea-rating">swill</span></h3>
        </div>
    `)
    $('article').prepend(ideaInList);
  }

// function resetForm(event) {
//   event.preventDefault();
//   $('#title-input').reset();
// }

  $('article').on('click', logSomething);

  function logSomething() {
      console.log('something');
  }