var $title = $('#title-input');
var $body = $('#body-input');
var $submit = $('.submit-button');

$('.delete-button').hover(function() {
    $(this).attr('src', './images/delete-hover.svg');
  }, function() {
    $(this).attr('src', './images/delete.svg');
  });

$('.upvote-button').hover(function() {
    $(this).attr('src', './images/upvote-hover.svg');
  }, function() {
    $(this).attr('src', './images/upvote.svg');
  });

$('.downvote-button').hover(function() {
    $(this).attr('src', './images/downvote-hover.svg');
  }, function() {
    $(this).attr('src', './images/downvote.svg');
  });

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
    var object = JSON.stringify(userIdea);
    var key = JSON.stringify(Date.now());
    localStorage.setItem(key, object); 
    addIdeaToDom($title.val(),$body.val());
  }

  function addIdeaToDom(title, body) {
    var ideaInList = (`
        <div class="idea-title-header">
            <h2>${title}</h2>
            <img src="./images/delete.svg" alt="delete-button" class="delete-button">
        </div>
        <p>${body}</p>
        <div class="voting-buttons">
            <img src="./images/upvote.svg" alt="upvote-button" class="upvote-button">
            <img src="./images/downvote.svg" alt="downvote-button" class="downvote-button">
            <h3>quality: <span class="idea-rating">swill</span></h3>
        </div>
    `)
    $('article').append(ideaInList);
  }

  $('article').on('click', logSomething);

  function logSomething() {
      console.log('something');
  }