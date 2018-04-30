$(document).ready(function() {
  $('#post').on('submit', function(event) {
    event.preventDefault();

    function postCompletion() {
      var completedPost = true;

      if (
        $('#user').val() === '' ||
        $('#title').val() === '' ||
        $('#body').val() === '' ||
        $('#languages').val() === '' ||
        $('#post-type').val() === ''
      ) {
        completedPost = false;
      }

      return completedPost;
    }

    if (postCompletion()) {
      var postObject = {
        name: $('#user')
          .val()
          .trim(),
        title: $('#title')
          .val()
          .trim(),
        content: $('#body')
          .val()
          .trim(),
        language: $('#languages').val(),
        content_type: $('#post-type').val()
      };

      $.post('/api/contributions', postObject, function(data) {
        console.log(data);
      });
    } else {
      alert('Please fill out all fields to submit a post!');
    }
  });
});
