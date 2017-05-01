jQuery('.main .lightblue-bg').css({
  backgroundColor :'red',
  textTransform :'uppercase'
});

jQuery('.side-menu > ul > li > a').click(function(e) {
  e.preventDefault();

  console.log('link clicked was ' + jQuery(this).text());

  $('.lightblue-bg p').text($(this).text());
});
