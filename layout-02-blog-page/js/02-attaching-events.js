$(document).ready(function() {
  $('.form-row input').blur(function(event) {
    x = $(this).val();
    if(x){
      $(this).next('span').text(x).removeClass('error');
    } else{
      $(this).next('span').text("You didn't enter text").addClass('error');
    }
  });
});
