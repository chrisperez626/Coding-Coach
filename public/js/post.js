$(document).ready(function() {
  $('#post').on('submit', function(event) {
    // function to check if all post fields have a value
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
      alert('Adding Post...');
    } else {
      event.preventDefault();
      alert('Please fill out all fields to submit a post!');
    }
  });
});
