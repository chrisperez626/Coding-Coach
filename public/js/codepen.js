var htmlPen = `<p data-height="400" data-theme-id="0" data-slug-hash="WJoXaa" data-default-tab="html,result" data-user="robdaraban" data-embed-version="2" data-pen-title="HTML Tutorial" class="codepen">See the Pen <a href="https://codepen.io/robdaraban/pen/WJoXaa/">HTML Tutorial</a> by Rob (<a href="https://codepen.io/robdaraban">@robdaraban</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

var cssPen = `<p data-height="400" data-theme-id="0" data-slug-hash="OZbzzq" data-default-tab="html,result" data-user="robdaraban" data-embed-version="2" data-pen-title="CSS Tutorial" class="codepen">See the Pen <a href="https://codepen.io/robdaraban/pen/OZbzzq/">CSS Tutorial</a> by Rob (<a href="https://codepen.io/robdaraban">@robdaraban</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

var jsPen = `<p data-height="400" data-theme-id="0" data-slug-hash="pVNpxy" data-default-tab="html,result" data-user="robdaraban" data-embed-version="2" data-pen-title="JS Tutorial" class="codepen">See the Pen <a href="https://codepen.io/robdaraban/pen/pVNpxy/">JS Tutorial</a> by Rob (<a href="https://codepen.io/robdaraban">@robdaraban</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

$(".languageButton").on("click", function(event){
    event.preventDefault();

    if($(this).data("language") === "html tutorial") {
        $("#codepenPanel").empty();
        $("#codepenPanel").html(htmlPen);
    } else if($(this).data("language") === "css tutorial") {
        $("#codepenPanel").empty();
        $("#codepenPanel").html(cssPen);
    } else if($(this).data("language") === "javascript tutorial") {
        $("#codepenPanel").empty();
        $("#codepenPanel").html(jsPen);
    }
  });