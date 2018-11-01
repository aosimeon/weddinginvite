$(document).ready(function() {
  $(".navbar-toggle").on("click", function() {
    $(".navbar-toggle").toggleClass("close");
    $("body").toggleClass("overflow-hidden");
    $("#main-header nav ul").toggle(500);
  });

  $(".back-btn").on("click", function() {
    window.history.back();
  });
});
