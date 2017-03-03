  $(document).ready(function() {
    $(window).resize(function() {
      var more = document.getElementById("js-navigation-more");
      if ($(more).length > 0) {
        var windowWidth = $(window).width();
        var moreLeftSideToPageLeftSide = $(more).offset().left;
        var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

        if (moreLeftSideToPageRightSide < 330) {
          $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
          $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
        }

        if (moreLeftSideToPageRightSide > 330) {
          $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
          $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
        }
      }
    });

    var menuToggle = $("#js-mobile-menu").unbind();
    $("#js-navigation-menu").removeClass("show");

    menuToggle.on("click", function(e) {
      e.preventDefault();
      $("#js-navigation-menu").slideToggle(function(){
        if($("#js-navigation-menu").is(":hidden")) {
          $("#js-navigation-menu").removeAttr("style");
        }
      });
    });

    var element = document.getElementById("js-fadeInElement");
    $(element).addClass('js-fade-element-hide');
    console.log(element);

    $(window).scroll(function() {
      if( $("#js-fadeInElement").length > 0 ) {
        var elementTopToPageTop = $(element).offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var windowInnerHeight = window.innerHeight;
        var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
        var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
        var distanceFromBottomToAppear = 300;

        if(elementTopToWindowBottom > distanceFromBottomToAppear) {
          $(element).addClass('js-fade-element-show');
        }
        else if(elementTopToWindowBottom < 0) {
          $(element).removeClass('js-fade-element-show');
          $(element).addClass('js-fade-element-hide');
        }
      }
    });
  });
