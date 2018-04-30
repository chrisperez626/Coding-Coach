$(document).ready(function () {
    $('#post').on('submit', function () {
        var postObject = {
            name: $('#user').val().trim(),
            title: $('#title').val().trim(),
            content: $('#body').val().trim(),
            language: $('#languages').val(),
            content_type: $('#post-type').val()
        };

        $.post('/api/contributions', postObject, function (data) {
            console.log(data);
        });
        alert("Adding Post...")
    });
});
