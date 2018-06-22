$(document).ready(function () {

  $('select[name="language"]').change(function () {
    var language = $('select[name=language]').val();
    console.log(language);
    location.href = '/api/contributions/' + language;
  });
});
