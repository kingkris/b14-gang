jQuery(document).ready(function($) {
  $('.hamburger').click(function(event) {
    $(this).toggleClass('active');
    $('.site-header nav').slideToggle();
  });
});
