$(".our-beginning__slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.our-beginning__slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2010)
    .end()
    .appendTo('.our-beginning__slideshow');
},  7000);