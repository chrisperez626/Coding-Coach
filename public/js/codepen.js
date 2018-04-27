var htmlPen = `<p data-height="265" data-theme-id="0" data-slug-hash="WJoXaa" data-default-tab="html,result" data-user="robdaraban" data-embed-version="2" data-pen-title="HTML Tutorial" class="codepen">See the Pen <a href="https://codepen.io/robdaraban/pen/WJoXaa/">HTML Tutorial</a> by Rob (<a href="https://codepen.io/robdaraban">@robdaraban</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

var cssPen = `<p data-height="265" data-theme-id="0" data-slug-hash="qoWRez" data-default-tab="html,result" data-user="robdaraban" data-embed-version="2" data-pen-title="margin : 0 auto; Example" class="codepen">See the Pen <a href="https://codepen.io/robdaraban/pen/qoWRez/">margin : 0 auto; Example</a> by Rob (<a href="https://codepen.io/robdaraban">@robdaraban</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

$(".languageButton").on("click", function(event){
    event.preventDefault();

    if($(this).data("language") === "html tutorial") {
        $("#codepenPanel").empty();
        $("#codepenPanel").html(htmlPen);
    } else if($(this).data("language") === "css tutorial") {
        $("#codepenPanel").empty();
        $("#codepenPanel").html(cssPen);
    }
  });