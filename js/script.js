$(document).ready(function(){
  $('ul.tabs').delegate('li:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current')
      .parents('div.gallery').find('div.box').hide().eq($(this).index()).fadeIn(150);
  })
})