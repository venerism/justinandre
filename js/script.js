(function(){

  var link,
      toggleScrollToTopLink = function() {

          if($("body").scrollTop() > 0 ||
          $("html").scrollTop() > 0 {
            link.fadeIn(400);
          }
            else{
              link.fadeOut(400);
            }
        };

      $(document).ready(function(){

          link = $(".scroll-to-top-link");

          $(window).scroll(toggleScrollToTopLink);

          toggleScrollToTopLink();

          link.on("click", fuction(){
              $("body").animate({scrollTop:0});
              $("html").animate({scrollTop:0});

          })

      });

})();
