(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop >= document.getElementById("aboutMe").offsetTop){
        $('.navbar').addClass('opaque');
        $('.dropdown').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
        $('.dropdown').removeClass('opaque');
    }
});

})(jQuery); // End of use strict
