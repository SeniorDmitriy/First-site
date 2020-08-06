$(function(){
	$('.slider').slick({
		prevArrow: '<button class="slick__arrow slick__prev"><img src="images/slider-icon-prev.svg" alt=""></button>',
		nextArrow: '<button class="slick__arrow slick__next"><img src="images/slider-icon-next.svg" alt=""></button>',
		fade: true,
		
		 responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
        
      }
    }
]
	});
});