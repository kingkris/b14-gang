$(document).ready(function() {
  $('.btn-anim').click(function(event) {
    event.preventDefault();
    $(this).prev().addClass('animated swing').one('animationend', function () {
      $(this).removeClass('animated swing').addClass('animated wobble')
    });
  });
});
