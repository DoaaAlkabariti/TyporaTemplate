
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
