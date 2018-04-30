$(document).ready(function() {
    Handlebars.registerHelper('dotdotdot', function(str) {
        if (str.length > 100)
          return str.substring(0,10) + '...';
        return str;
      });
});