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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG1vcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLW5hdmlnYXRpb24tbW9yZVwiKTtcclxuICAgICAgaWYgKCQobW9yZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBtb3JlTGVmdFNpZGVUb1BhZ2VMZWZ0U2lkZSA9ICQobW9yZSkub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB2YXIgbW9yZUxlZnRTaWRlVG9QYWdlUmlnaHRTaWRlID0gd2luZG93V2lkdGggLSBtb3JlTGVmdFNpZGVUb1BhZ2VMZWZ0U2lkZTtcclxuXHJcbiAgICAgICAgaWYgKG1vcmVMZWZ0U2lkZVRvUGFnZVJpZ2h0U2lkZSA8IDMzMCkge1xyXG4gICAgICAgICAgJChcIiNqcy1uYXZpZ2F0aW9uLW1vcmUgLnN1Ym1lbnUgLnN1Ym1lbnVcIikucmVtb3ZlQ2xhc3MoXCJmbHktb3V0LXJpZ2h0XCIpO1xyXG4gICAgICAgICAgJChcIiNqcy1uYXZpZ2F0aW9uLW1vcmUgLnN1Ym1lbnUgLnN1Ym1lbnVcIikuYWRkQ2xhc3MoXCJmbHktb3V0LWxlZnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9yZUxlZnRTaWRlVG9QYWdlUmlnaHRTaWRlID4gMzMwKSB7XHJcbiAgICAgICAgICAkKFwiI2pzLW5hdmlnYXRpb24tbW9yZSAuc3VibWVudSAuc3VibWVudVwiKS5yZW1vdmVDbGFzcyhcImZseS1vdXQtbGVmdFwiKTtcclxuICAgICAgICAgICQoXCIjanMtbmF2aWdhdGlvbi1tb3JlIC5zdWJtZW51IC5zdWJtZW51XCIpLmFkZENsYXNzKFwiZmx5LW91dC1yaWdodFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBtZW51VG9nZ2xlID0gJChcIiNqcy1tb2JpbGUtbWVudVwiKS51bmJpbmQoKTtcclxuICAgICQoXCIjanMtbmF2aWdhdGlvbi1tZW51XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuXHJcbiAgICBtZW51VG9nZ2xlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoXCIjanMtbmF2aWdhdGlvbi1tZW51XCIpLnNsaWRlVG9nZ2xlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJChcIiNqcy1uYXZpZ2F0aW9uLW1lbnVcIikuaXMoXCI6aGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAkKFwiI2pzLW5hdmlnYXRpb24tbWVudVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1mYWRlSW5FbGVtZW50XCIpO1xyXG4gICAgJChlbGVtZW50KS5hZGRDbGFzcygnanMtZmFkZS1lbGVtZW50LWhpZGUnKTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiggJChcIiNqcy1mYWRlSW5FbGVtZW50XCIpLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRUb3BUb1BhZ2VUb3AgPSAkKGVsZW1lbnQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICB2YXIgd2luZG93VG9wVG9QYWdlVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciB3aW5kb3dJbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB2YXIgZWxlbWVudFRvcFRvV2luZG93VG9wID0gZWxlbWVudFRvcFRvUGFnZVRvcCAtIHdpbmRvd1RvcFRvUGFnZVRvcDtcclxuICAgICAgICB2YXIgZWxlbWVudFRvcFRvV2luZG93Qm90dG9tID0gd2luZG93SW5uZXJIZWlnaHQgLSBlbGVtZW50VG9wVG9XaW5kb3dUb3A7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlRnJvbUJvdHRvbVRvQXBwZWFyID0gMzAwO1xyXG5cclxuICAgICAgICBpZihlbGVtZW50VG9wVG9XaW5kb3dCb3R0b20gPiBkaXN0YW5jZUZyb21Cb3R0b21Ub0FwcGVhcikge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcygnanMtZmFkZS1lbGVtZW50LXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihlbGVtZW50VG9wVG9XaW5kb3dCb3R0b20gPCAwKSB7XHJcbiAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdqcy1mYWRlLWVsZW1lbnQtc2hvdycpO1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcygnanMtZmFkZS1lbGVtZW50LWhpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iXX0=
