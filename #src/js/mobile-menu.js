$(function () {

  let navToggle = $(".burger-js");
  let nav = $(".header-nav-col-js");
  let top = $(".btn-top");

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    nav.removeClass("show");
    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);
  });

  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() <= 800) {
        $(top).fadeOut();
      } else {
        $(top).fadeIn();
      }
    });
  });

})