
/***********************function for make mainpage and last section full screen***********************/
function alignContent(){
  for(var n=$(window).height(),e=document.querySelectorAll("section.fullscreen"),t=0;t<e.length;t++)
  e[t].style.height=n+"px";$(".content-resizer").each(function(){var e=$(this).height();$(this).css("top",n/2-e/2)})}alignContent(),$(window).bind("resize",
  function(){alignContent()}),function(){var e=$(".slider").unslider({speed:window.innerWidth/2,delay:1e3+4*window.innerWidth},!0).data("unslider");$(".slider").parent().find(".dot>a").click(function(){e.move($(this.parentElement).index()),
    $("#function-slider .desc-wrapper.active").removeClass("active"),e.stop()}),e.stop(),e.start(),$("#function-slider").on("mouseenter click",".desc-wrapper",function(){this.classList.add("active"),e.stop()}),userSliderController=$(".like-card-slide").unslider({speed:window.innerWidth/2.5,delay:1e3}
      ,!0).data("unslider"),$("#likes").addClass("done"),$(".next-user-card").click(function(){userSliderController.next()}),userSliderController.stop();var t=!1,i=!1,o=0;function l(){i=!0,$("html").clearQueue(),$("html").stop(),t=!0,
      clearInterval(n)
    }
      function r(){0==$("html").scrollTop()&&($("html").clearQueue(),$("html").stop(),$("html").animate({scrollTop:50},300,
        function(){$("html").animate({scrollTop:0},150)}))}var n=setInterval(function(){!t&&r()},1e4);
        setTimeout(function(){$("#home").on("mousewheel",function(){t=!0,l()}).on("mousemove",function(e){if(!i){t=!0;var n=e.originalEvent;0<(n.movementY||n.mozMovementY||n.webkitMovementY||0)&&function(){s&&(clearTimeout(s),s=null);
          s=setTimeout(function(){o++,r(),4<o&&l()},50)}()}})},3e3);var s=null}()

/***********************function for move the text in mainpage***********************/
var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 2000); // Change image every 2 seconds
  }
/************************function for slider in feature*************************/
   var TxtType = function(el, toRotate, period) {
         this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
         this.isDeleting = false;
   };

     TxtType.prototype.tick = function() {
         var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
         this.txt = fullTxt.substring(0, this.txt.length - 1);
         } else {
         this.txt = fullTxt.substring(0, this.txt.length + 1);
         }

         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

         var that = this;
         var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

         if (!this.isDeleting && this.txt === fullTxt) {
         delta = this.period;
         this.isDeleting = true;
         } else if (this.isDeleting && this.txt === '') {
         this.isDeleting = false;
         this.loopNum++;
         delta = 500;
         }

         setTimeout(function() {
        that.tick();
         }, delta);   };

     window.onload = function() {
         var elements = document.getElementsByClassName('typewrite');
         for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
       document.body.appendChild(css);
    };


/*************************function for slider in the theme section***********************************/
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlide");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      // for (i = 0; i < dots.length; i++) {
      //     dots[i].className = dots[i].className.replace(" active", "");
      // }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }


/*********************************************************************************/
