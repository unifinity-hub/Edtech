var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3, 
	watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        370: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
  });
  var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	thumbs: {
	  swiper: galleryThumbs
	}
  });

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("g-top");
    }else{
        $("header").removeClass("g-top");

	}
});

var swiper = new Swiper('.roadshow-slide-inner', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });
var swiper = new Swiper('.timelins', {
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  });
  
  

