$(document).ready(function() {

  $('.add-mobile-btn').click(function(event) {
    event.preventDefault();
    lastItem = $(this).prev();
    lastItem.clone(true,true).removeClass('active').insertAfter(lastItem);
  });

  $('.rm-btn').click(function(event) {
    event.preventDefault();
    console.log("inside remove");
    $(this).parent().slideUp();
  });

  $('.df-radio input[type="radio"]').change(function(event) {
    $('.form-row').removeClass('active');
    $(this).parentsUntil('form-row').addClass('active');
  });
});
