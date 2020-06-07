$(document).ready(function(){
	var width = $( window ).width();
	//Запрет скролла по X 
	(function($) { $(window).scroll( function() { $(window).scrollLeft(0); });
})(jQuery);

//Для списка
if (width >= 796) {
	$(".list-main1").chosen({
		no_results_text: "Упс.. Город не найден"
	}); 
	$(".list-main2").chosen({
		no_results_text: "Упс.. Клиника не найдена"
	}); 

	$('.chosen-search-input').attr('placeholder', 'Поиск..' );
	$('.chosen-search-input:eq(0)').attr('placeholder', 'Введите свой город' );
	$('.chosen-search-input:eq(1)').attr('placeholder', 'Введите название клиники' );
}else {
	$('.main_form_list').addClass('selectStyleMax796')
	$('.youCity').html('Ваш город');
	$('.youVeterinar').html('Ветеринар');
	$('.youClinic').html('Клиника');
};
	//Паралакс фона
	$(window).scroll(function () {
		var movement = -parseInt($(this).scrollTop()  / 10);
		movement = movement + 80;
		$('.main').css({
			backgroundPosition: 'left ' + movement + 'px '
		});
	}); 

	//Скроллинг
	function scrollTo() {
		//Заказать услугу \ Цены
		$('.scrollFromPrice').click( function(){ 
			var scroll_el = $('.scrollToPrice');
			if ($(scroll_el).length != 0) { 
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 160 }, 800); 
			}
			return false;
		});
		//Клиники \ Города
		$('.scrollFromCity').click( function(){ 
			var scroll_el = $('.scrollToCity');
			if ($(scroll_el).length != 0) { 
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 160 }, 800); 
			}
			return false;
		});
   	//Почему Clinic
   	$('.scrollFromWhy').click( function(){ 
   		var scroll_el = $('.scrollToWhy');
   		if ($(scroll_el).length != 0) { 
   			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 160 }, 800); 
   		}
   		return false;
   	});

   };

   scrollTo();

	//Появление шапки

	$(window).scroll(function(){
		if($(this).scrollTop()>120){
			$('.menu').addClass('menu-fixed');
		}
		else if ($(this).scrollTop()<120){
			$('.menu').removeClass('menu-fixed');
		}
	});

	//Слайдеры
	//Для статей 
	// $('.article_slider').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	autoplay: true,
	// 	prevArrow: '<div class="slider_arrow arrow-left revealator-slideleft revealator-once"></div>',
	// 	nextArrow: '<div class="slider_arrow arrow-right revealator-slideright revealator-once"></div>',
	// 	autoplaySpeed: 10000,
	// 	draggable: true,
	// 	infinite: true,
	// 	cssEase: 'linear',
	// 	pauseOnHover: true,
	// 	speed: 250,
	// 	responsive: [
	// 	{
	// 		breakpoint: 1205,
	// 		settings: {
	// 			slidesToShow: 3
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			arrows: false,
	// 			autoplaySpeed: 3000,
	// 			speed: 500,
	// 			slidesToShow: 2
	// 		}
	// 	}
	// 	,
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			arrows: false,
	// 			autoplaySpeed: 3000,
	// 			speed: 500,
	// 			slidesToShow: 1
	// 		}
	// 	}
	// 	]
	// });

	$('.article_slider').owlCarousel({
		items:4,
		loop:true, //Зацикливаем слайдер
    margin:0, //Отступ от элемента справа в 50px
    dots: false,
    nav: true,
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:20000,
    autoplayHoverPause: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1,
    	nav: false
    },
    // breakpoint from 480 up
    1200 : {
    	items: 4
    },
    992 : {
    	items: 3
    },
    768 : {
    	items: 2
    },
    410 : {
    	nav: true,
    	items: 1
    }
  }
});
	//Для городов 
	// $('.city_slider').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	autoplay: true,
	// 	prevArrow: '<div class="slider_arrow arrow-left arrow-city revealator-slideleft revealator-once"></div>',
	// 	nextArrow: '<div class="slider_arrow arrow-right arrow-city revealator-slideright revealator-once"></div>',
	// 	autoplaySpeed: 15000,
	// 	draggable: true,
	// 	infinite: true,
	// 	cssEase: 'linear',
	// 	pauseOnHover: true,
	// 	speed: 250,
	// 	responsive: [
	// 	{
	// 		breakpoint: 1205,
	// 		settings: {
	// 			slidesToShow: 4
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			arrows: false,
	// 			autoplaySpeed: 3000,
	// 			speed: 500,
	// 			slidesToShow: 3
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			arrows: false,
	// 			autoplaySpeed: 3000,
	// 			speed: 500,
	// 			slidesToShow: 2
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 425,
	// 		settings: {
	// 			arrows: false,
	// 			autoplaySpeed: 10,
	// 			speed: 1000,
	// 			slidesToShow: 1
	// 		}
	// 	}


	// 	]
	// });

	$('.city_slider_owl').owlCarousel({
		items:5,
		loop:true, //Зацикливаем слайдер
    margin:0, //Отступ от элемента справа в 50px
    dots: false,
    nav: true,
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:20000,
    autoplayHoverPause: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1,
    	nav: false
    },
    // breakpoint from 480 up
    1200 : {
    	items: 5
    },
    992 : {
    	items: 4
    },
    768 : {
    	items: 3
    },
    530 : {
    	nav: true,
    	items: 2
    },
    400 : {
    	items: 2,
    	nav: false
    }
  }
});


//Для клиник 
$('.best-clinic_list').owlCarousel({
	items:5,
		loop:true, //Зацикливаем слайдер
    margin:0, //Отступ от элемента справа в 50px
    dots: false,
    nav: true,
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:20000,
    autoplayHoverPause: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1,
    	nav: false
    },
    // breakpoint from 480 up
    1200 : {
    	items: 5
    },
    992 : {
    	items: 4
    },
    768 : {
    	items: 3
    },
    530 : {
    	nav: true,
    	items: 2
    },
    400 : {
    	items: 2,
    	nav: false
    }
  }
});


	// Маска для телефона 
	$(".phone-form").mask("+7(999) 999-99-99");
});