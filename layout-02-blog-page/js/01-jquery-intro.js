$(document).ready(function() {
  jQuery('.main .lightblue-bg').css({
    backgroundColor :'red',
    textTransform :'uppercase'
  });


  jQuery('.side-menu > ul > li > a').click(function(e) {
    e.preventDefault();

    $('.side-menu > ul > li > a').removeClass('active');
    $(this).addClass('active');
    console.log('link clicked was ' + jQuery(this).text());
    $('.lightblue-bg p').text($(this).text());
  });



  $('.btn1').click(function(e) {
    e.preventDefault();
/*
    $('.dabba').css({
      backgroundColor: 'purple',
      borderColor: 'green'
    });
    $('.dabba').animate({height: '100px', width: '200px'}, 'slow');
    $('.dabba').slideUp('fast');
*/


    $('.dabba').css({
      backgroundColor: 'purple',
      borderColor: 'green'
    }).animate({height: '100px', width: '200px'}, 'slow').slideUp('fast');
  });


/* Assigning a click function */

$('.title').click(function(event) {
  /*$(this).text('open');*/
/*
  $(this).children('span').toggleClass('close');
  $(this).next('.side-menu').slideToggle('fast');
*/
  $(this).children('span').toggleClass('close').parent().next().slideToggle('fast');

});




});






