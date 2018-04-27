var apiKey = "AIzaSyAayGDTZosMnbroBx71FzowCC-bB1bPEno";
var part = "snippet";
var t = "jsonc"
var q = "";
var maxResults = 2;
var type = "video";
var queryYTURL = "";


	//Grabbing the values from the inputs and setting them to the global variables
	$(".languageButton").on("click", function(event){
      event.preventDefault();

      //Buttons will need to have a data-language attribute containing the respective language
      q = $(this).data("language");
      
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

      $("#youtubePanel").empty(); //clear div before appending videos

        //loop to set video id from 4 objects returned from API, dump to div
        for (i = 0; i < maxResults; i++){

          var iframeString = "<iframe id=ytvid" + i + " width=50% height=\"345\" src=\"https://www.youtube.com/embed/"
          + YTData.items[i].id.videoId + "\"><iframe>";  //build iframe element

        $("#youtubePanel").append(iframeString);  //add iframe elemen to div

    }
  }) 
}