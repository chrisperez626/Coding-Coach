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
        window.location.href = "/all/contributions";
      });
      $('#modal-name').css({"display":"block"});
      $(".close-modal, .modal-sandbox").click(function(){
        $(".modal").css({"display":"none"});})
    } else {
      event.preventDefault();

      $('#modal-error').css({"display":"block"});
      $(".close-modal, .modal-sandbox").click(function(){
        $(".modal").css({"display":"none"});})
    }
  });
});
