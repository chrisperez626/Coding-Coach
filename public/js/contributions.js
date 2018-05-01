$(document).ready(function() {
  (function() {
    var showChar = 300;
    var ellipsestext = '...';

    $('.truncate').each(function() {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content;
        var html =
          '<div class="truncate-text" style="display:block">' +
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '&nbsp;&nbsp;<strong><a href="" class="moreless more">read more</a></strong></span></span></div><div class="truncate-text" style="display:none">' +
          h +
          '&nbsp;&nbsp;<strong><a href="" class="moreless less"> less</a></strong></span></div>';

        $(this).html(html);
      }
    });

    $('.moreless').click(function() {
      var thisEl = $(this);
      var cT = thisEl.closest('.truncate-text');
      var tX = '.truncate-text';

      if (thisEl.hasClass('less')) {
        cT.prev(tX).toggle();
        cT.slideToggle();
      } else {
        cT.toggle();
        cT.next(tX).fadeToggle();
      }
      return false;
    });
  })();

  $('select[name="language"]').change(function() {
    var language = $('select[name=language]').val();
    console.log(language);
    location.href = '/api/contributions/' + language;
  });
});
