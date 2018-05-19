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