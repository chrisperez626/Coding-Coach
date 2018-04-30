var stackArray = window.location.href.split("/");
var stackQuery = stackArray[stackArray.length - 1];

var stackUrl = "https://api.stackexchange.com/2.2/questions?page=1&pagesize=25&fromdate=1509494400&todate=1524873600&order=desc&sort=activity&tagged=" + stackQuery + "&site=stackoverflow&filter=!BHMIbze0EPheMk572h0kxuj.q(NQC*"

$(document).ready(function() {  
    getStackResults(stackUrl); //queryURL built, call function to make AJAX call
});

    

// This runYTQuery function expects 1 parameter: the final URL to download data from)
function getStackResults(stackUrl) {

// The AJAX function uses the queryYTURL and GETS the JSON data associated with it.
// The data then gets stored in the variable called: "YTData"

    $.ajax({
      url: stackUrl,
      method: "GET"
    }).done(function(data) {
        // $(".stackoverflow-div").empty(); //clear div before appending videos

        //loop to set video id from 4 objects returned from API, dump to div
        for (i = 0; i < 25; i++){
            var stackDiv = $("<div>");
            stackDiv.css("border", "1px solid black");
            var titlePara = $("<p>").text(data.items[i].title);
            var qLink = $("<a>").text("Link");
            qLink.attr("href", data.items[i].link);
            stackDiv.append(titlePara);
            stackDiv.append(qLink);
            // $(".stackoverflow-div").append(stackDiv);  //add iframe elemen to div
            $("#stackoverflowtable  > tbody").append("<tr><td>" + data.items[i].title + "</tr></td>" );

        }
  }) 
}
