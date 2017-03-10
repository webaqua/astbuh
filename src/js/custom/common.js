window.onscroll = function(){
 var html = document.documentElement, body = document.body;
 var BlkStyle = document.getElementById('navmenu').style;
 if(html.scrollTop>50||body.scrollTop>50) {
     BlkStyle.top="0";
     BlkStyle.transition="all 0.5s";
 } else {
   BlkStyle.top="-120px";
   BlkStyle.transition="none";
 }
}

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

    var bittersMap = (function () {
    var myLatlng = new google.maps.LatLng(51.1801000, 71.4459800),
    mapCenter = new google.maps.LatLng(51.1801000, 71.4459800),
    mapCanvas = document.getElementById('map_canvas'),
    mapOptions = {
    center: mapCenter,
    zoom: 13,
    scrollwheel: false,
    draggable: true,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(mapCanvas, mapOptions),
    contentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>'+
    '<div id="bodyContent"'+
    '<p>Sveavägen 98</p>'+
    '</div>'+
    '</div>',
    infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
    }),
    marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'thoughtbot (Sweden)'
    });
    return {
    init: function () {
    map.set('styles', [{
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
    { hue: '#ffff00' },
    { saturation: 30 },
    { lightness: 10}
    ]}
    ]);
    google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map,marker);
    });
    }
    };
    }());
    bittersMap.init();

   jQuery('.go_to').click( function(){
     var scroll_el = jQuery(this).attr('href');
     if (jQuery(scroll_el).length != 0) {
       jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top - 70 }, 500);
     }
     return false;
   });

  });
