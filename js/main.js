$(document).ready(function(){
  $('.parallax').parallax();
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $(document).on('scroll', function (e) { updateColor(); });

  function updateColor() {
    var o = $(document).scrollTop() / 500;
      if (o > 1.000) { o = 1; }
      var e = $('nav');
      var currentColor = e.css('background-color');
      var rgb = currentColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
      var newColor = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + o + ')';
      e.attr('style', 'background-color: ' + newColor + ' !important');
  }

  updateColor();
});
