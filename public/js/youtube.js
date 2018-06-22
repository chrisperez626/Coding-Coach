window.location.href;
var urlArray = window.location.href.split('/');
var searchTerm = urlArray[urlArray.length - 1];

var apiKey = 'AIzaSyAayGDTZosMnbroBx71FzowCC-bB1bPEno';
var part = 'snippet';
var t = 'jsonc';
var q = '';
var maxResults = 6;
var type = 'video';
var queryYTURL = '';

$(document).ready(function () {
  q = searchTerm + ' tutorial';

  queryYTURL =
    'https://www.googleapis.com/youtube/v3/search?part=' +
    part +
    '&key=' +
    apiKey +
    '&maxResults=' +
    maxResults +
    '&type=' +
    type +
    '&q=' +
    q +
    '&t=' +
    t;

  runYTQuery(queryYTURL);
});

// function to run search if user presses enter
$('#addTech').keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault();
    q =
      $('#addTech')
        .val()
        .trim() + ' tutorial';

    queryYTURL =
      'https://www.googleapis.com/youtube/v3/search?part=' +
      part +
      '&key=' +
      apiKey +
      '&maxResults=' +
      maxResults +
      '&type=' +
      type +
      '&q=' +
      q +
      '&t=' +
      t;

    runYTQuery(queryYTURL);
  }
});

$('#searchButton').click(function (event) {
  event.preventDefault();
  q =
    $('#addTech')
      .val()
      .trim() + ' tutorial';

  queryYTURL =
    'https://www.googleapis.com/youtube/v3/search?part=' +
    part +
    '&key=' +
    apiKey +
    '&maxResults=' +
    maxResults +
    '&type=' +
    type +
    '&q=' +
    q +
    '&t=' +
    t;

  runYTQuery(queryYTURL);
});

function runYTQuery(queryYTURL) {
  $.ajax({
    url: queryYTURL,
    method: 'GET'
  }).done(function (YTData) {
    $('.youtube-div').empty();

    for (i = 0; i < maxResults; i++) {
      var iframeString =
        '<iframe id=ytvid' +
        i +
        ' width=50% height="400" src="https://www.youtube.com/embed/' +
        YTData.items[i].id.videoId +
        '"><iframe>';

      $('.youtube-div').append(iframeString);
      $('#addTech').val('');
    }
  });
}
