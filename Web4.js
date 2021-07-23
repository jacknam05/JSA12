$(function () {
    $(".detail").slideUp();
    $(".content h3").click(function (e) {
      $(".detail").slideToggle();
    });
  });