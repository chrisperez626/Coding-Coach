var stackArray = window.location.href.split('/');
var stackQuery = stackArray[stackArray.length - 1];

var stackUrl =
  'https://api.stackexchange.com/2.2/search/advanced?key=ytWgy5BeSx8Sl9JS6s0svA((&page=1&pagesize=50&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&q=' +
  stackQuery +
  '&site=stackoverflow';

$(document).ready(function() {
  getStackResults(stackUrl);
});

// function to run search if user presses enter
$('#addTech').keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    stackUrl =
    'https://api.stackexchange.com/2.2/search/advanced?key=ytWgy5BeSx8Sl9JS6s0svA((&page=1&pagesize=50&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&q=' +
    $('#addTech')
      .val()
      .trim() +
    '&site=stackoverflow';
  getStackResults(stackUrl);
  }
});

$('#searchButton').click(function(event) {
  event.preventDefault();
  stackUrl =
    'https://api.stackexchange.com/2.2/search/advanced?key=ytWgy5BeSx8Sl9JS6s0svA((&page=1&pagesize=50&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&q=' +
    $('#addTech')
      .val()
      .trim() +
    '&site=stackoverflow';
  getStackResults(stackUrl);
});

function getStackResults(stackUrl) {
  $.ajax({
    url: stackUrl,
    method: 'GET'
  }).done(function(data) {
    $('.stackoverflow-div').empty();

    for (i = 0; i < data.items.length; i++) {
      var stackDiv = $('<div>');
      stackDiv.css('border-left', '2px solid #cf353f');
      stackDiv.css('border-right', '2px solid #cf353f');
      stackDiv.css('border-top', '1px solid #cf353f');
      stackDiv.css('border-bottom', '1px solid #cf353f');
      stackDiv.css('width', '100%');
      stackDiv.css('background-color', 'rgba(255, 255, 255, 0.8)');
      stackDiv.css('padding', '10px 0');
      stackDiv.css('text-align', 'center');
      var newStr = convertString(data.items[i].title);
      // console.log("newStr:", newStr);
      var qLink = $('<a>').text(newStr);
      qLink.css('color', '#3A0F11');
      qLink.css('text-decoration', 'none');
      qLink.hover(
        function() {
          $(this).css('color', '#C5323C');
        },
        function() {
          $(this).css('color', '#3A0F11');
        }
      );
      qLink.attr('href', data.items[i].link);
      stackDiv.append(qLink);
      $('.stackoverflow-div').append(stackDiv);
    }
  });
}

function stringTester (condition, str) {
  var regex = RegExp(condition);
  return regex.test(str);
} 

console.log(stringTester('good', 'This is avxcvcvxgoodgdgf day'));

// function to convert HTML entities to symbols
function convertString(str) {
  // console.log("first string:", str);
  for(var i = 0; i < 10; i++) {
    if (str.includes('&lt;')) {
      str = str.replace('&lt;', '<');
    }
    if (str.includes('&gt;')) {
      str = str.replace('&gt;', '>');
    }
    if (str.includes('&quot;')) {
      str = str.replace('&quot;', '\"');
    }
    if (str.includes('&#39;')) {
      str = str.replace('&#39;', "\'");
    }
    if (str.includes('&amp;')) {
      str = str.replace('&amp;', '&');
    }
  }
  return str;
}
