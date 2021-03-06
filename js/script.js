/* Author:
  Ken-Lauren Daganio
*/
$(document).ready(function(){

  $(document).tooltips();
  var msie6 = $.browser == 'msie' && $.browser.version < 7;
  if (!msie6) {
    var top = $('#navigation ul').offset().top - parseFloat($('#navigation').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function(event) {
      var y = $(this).scrollTop() - 75;
      if (y >= top) {
        $('#navigation').addClass('fixed');
      }else {
        $('#navigation').removeClass('fixed');
      }
    });
  }

  $(".page").each(function(){
    $(this).css("min-height", window.innerHeight);
  });

  $("#navigation a").click(function(e){
    e.preventDefault();
    var isFixed = $("#navigation").hasClass("fixed");
    $('html, body').animate({scrollTop: $("" + $(this).attr('href')).offset().top - (isFixed? 0: 51)}, 1000);
  });
  
  // $("#headshots img").each(function(){
  //   var user = $(this).data('twitter-handle');
  //   $("#" + user + "-tweet").tweet({
  //     join_text: "auto",
  //     username: user,
  //     count: 1,
  //     loading_text: "loading tweets...",
  //     refresh_interval: 300
  //   });
  // })

  $("#headshots img").hover(function(){
    var pos = $(this).position();
    var el = "#" + $(this).data('twitter-handle') + "-tweet";
    var popover = $(el);

    popover.css({
      left: pos.left - 110,
      top: pos.top - parseInt(popover.css('height')) - 20
    });

    popover.fadeIn('slow')
  },function(){
    $(".popover").hide();
  });
});




