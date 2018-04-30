console.log(window.location.href);
var urlArray = window.location.href.split("/");
var searchTerm = urlArray[urlArray.length - 1];

var apiKey = "AIzaSyAayGDTZosMnbroBx71FzowCC-bB1bPEno";
var part = "snippet";
var t = "jsonc"
var q = "";
var maxResults = 2;
var type = "video";
var queryYTURL = "";


  //Grabbing the values from the inputs and setting them to the global variables
$(document).ready(function() {

    //Buttons will need to have a data-language attribute containing the respective language
    q = searchTerm + " tutorial";
    
    queryYTURL = "https://www.googleapis.com/youtube/v3/search?part=" + part + "&key=" + apiKey + "&maxResults=" + maxResults + 
    "&type=" + type + "&q=" + q + "&t=" + t;
        
    runYTQuery(queryYTURL); //queryURL built, call function to make AJAX call
});

    

// This runYTQuery function expects 1 parameter: the final URL to download data from)
function runYTQuery(queryYTURL) {

// The AJAX function uses the queryYTURL and GETS the JSON data associated with it.
// The data then gets stored in the variable called: "YTData"

    $.ajax({
      url: queryYTURL,
      method: "GET"
    }).done(function(YTData) {

      $(".youtube-div").empty(); //clear div before appending videos

        //loop to set video id from 4 objects returned from API, dump to div
        for (i = 0; i < maxResults; i++){

          var iframeString = "<iframe id=ytvid" + i + " width=50% height=\"400\" src=\"https://www.youtube.com/embed/"
          + YTData.items[i].id.videoId + "\"><iframe>";  //build iframe element

        $(".youtube-div").append(iframeString);  //add iframe elemen to div

    }
  }) 
}