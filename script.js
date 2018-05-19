var $title = $('#title-input');
var $body = $('#body-input');
var $submit = $('.submit-button');
var ideaArray = [];

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

  function Idea(title,body,quality) {
      this.id = Date.now();
      this.title = title;
      this.body = body;
      this.quality = quality;
  }

  function makeIdea(event){
    event.preventDefault();
    var userIdea = new Idea($title.val(),$body.val(),0);
    ideaArray.push(userIdea);
    console.log(ideaArray);  
  }