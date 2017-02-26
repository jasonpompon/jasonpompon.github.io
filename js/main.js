$(document).ready(function(){

  // parallax from materialize
  $('.parallax').parallax();
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    draggable: true // Choose whether you can drag to open on touch screens
  });

  // nav on scroll change opacity
  $(document).on('scroll', function (e) {
    updateColor();
  });

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

  // add a fade in effect to title

  function animateText() {
    var str = "Modern Web Developer";
    var spans = '<span>' + str.split(" ").join(' </span><span>') + '</span>';
    $(spans).hide().appendTo('.main-header').each(function(i) {
        $(this).delay(1000 * i).fadeIn();
    });
  }

  function removeText() { $('.main-header span').remove(); }

  animateText();

  setInterval( function() {
    removeText();
  }, 5000);

  setInterval( function() {
    animateText();
  }, 5001);
  // TODO 1) find a way to refactor these 2 set interval to one
  // why do the animation tend to lag afer a while?

});
