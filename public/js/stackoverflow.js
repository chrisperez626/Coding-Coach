var stackArray = window.location.href.split("/");
var stackQuery = stackArray[stackArray.length - 1];

var stackUrl =
 'https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=50&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&q=' +
 stackQuery +
 '&site=stackoverflow';

$(document).ready(function() {  
    getStackResults(stackUrl); //queryURL built, call function to make AJAX call
});

$("#addTech").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        stackUrl =
        'https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=50&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&q=' +
        $("#addTech").val().trim() +
        '&site=stackoverflow';
        getStackResults(stackUrl);
    }
 });

$("#searchButton").click(function(event) {
    event.preventDefault();
    stackUrl =
    'https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=50&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&q=' +
    $("#addTech").val().trim() +
    '&site=stackoverflow';
    getStackResults(stackUrl);
});

// This runYTQuery function expects 1 parameter: the final URL to download data from)
function getStackResults(stackUrl) {

// The AJAX function uses the queryYTURL and GETS the JSON data associated with it.
// The data then gets stored in the variable called: "YTData"

    $.ajax({
      url: stackUrl,
      method: "GET"
    }).done(function(data) {
        $(".stackoverflow-div").empty(); //clear div before appending videos

        //loop to set video id from 4 objects returned from API, dump to div
        for (i = 0; i < data.items.length; i++){
            var stackDiv = $("<div>");
            stackDiv.css("border", "1px solid black");
            stackDiv.css("width", "100%");
            stackDiv.css("background-color", "rgba(255, 255, 255, 0.8)");
            stackDiv.css("padding", "10px 0");
            stackDiv.css("text-align", "center");
            var newStr = convertString(data.items[i].title);
            var qLink = $("<a>").text(newStr);
            qLink.css("color", "#3A0F11");
            qLink.css("text-decoration", "none");
            qLink.hover(function() {
                $(this).css("color", "#C5323C");
            }, function() {
                $(this).css("color", "#3A0F11");
            });
            qLink.attr("href", data.items[i].link);
            stackDiv.append(qLink);
            $(".stackoverflow-div").append(stackDiv);  //add iframe elemen to div
        }
  }) 
}

function convertString(str) {
    if(str.includes("&lt;")) {
        str = str.replace("&lt;", "<");
    }
    if(str.includes("&gt;")) {
        str = str.replace("&gt;", ">");
    }
    if(str.includes("&quot;")) {
        str = str.replace("&quot;", "\"");
    }
    if(str.includes("&#39;")) {
        str = str.replace("&#39;", "\'");
    }
    if(str.includes("&amp;")) {
        str = str.replace("&amp;", "&");
    }
    return str;
}