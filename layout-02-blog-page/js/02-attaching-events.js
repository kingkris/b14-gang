$(document).ready(function() {
  $('.form-row input').blur(function(event) {
    x = $(this).val();
    if(x){
      x = '<strong>' + x + '</strong>';
      $(this).next('span').html(x).removeClass('error');
      console.log($(this).parent().text())
    } else{
      $(this).next('span').text("You didn't enter text").addClass('error');
    }
  });
});
