 //Скрипт для создания анимации (animation.css)//
 $(document).ready(function() {
 	$(".design-list").animated("zoomInLeft", "zoomOutRight");
	$(".team-list").animated("fadeInUp", "fadeOut");
	$(".map__contacts").animated("slideInUp", "fadeOut");
    var carousel = $("#carousel").featureCarousel({
      // include options like this:
      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
    });
  });


//Скрипт для создания слайдера Slick//
$('.slider-2').slick({
	initialSlide: 0, // С какого слайда начинать показывать (отсчет в js начинается c "0" ) // 
	autoplay: true,
	autoplaySpeed: 4000,// Скорость смены слайда // 
	speed: 1000, // Скорость анимации // 
	cssEase: 'ease-in-out', // Тип анимации // 
	centerMode: false,
	centerPadding: '0px',
	dots: true, // Точки под слайдером // 
	adaptiveHeight: false,
	arrows: true,
	fade: false, // Слайды появляются из затемнения // 
	draggable: true, // Перелистывание слайдов свайпом //
	infinite: true, // Бесконечная прокрутка слайдов  //  
	vertical: false, // Вертикальное именение слайда // 
	slidesToShow: 4, // Количество слайдов  //
	slidesToScroll: 1, // Зависит от centerMode//
	responsive: [ // Описание поведения слайдера на разных разрешениях//
    {

      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {

      breakpoint: 666,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider-tweets').slick({
	initialSlide: 0, // С какого слайда начинать показывать (отсчет в js начинается c "0" ) // 
	autoplay: true,
	autoplaySpeed: 5000,// Скорость смены слайда // 
	speed: 1000, // Скорость анимации // 
	cssEase: 'ease-in-out', // Тип анимации // 
	centerMode: false,
	centerPadding: '0px',
	dots: false, // Точки под слайдером // 
	adaptiveHeight: false,
	arrows: true,
	fade: false, // Слайды появляются из затемнения // 
	draggable: true, // Перелистывание слайдов свайпом //
	infinite: true, // Бесконечная прокрутка слайдов  //  
	vertical: false, // Вертикальное именение слайда // 
	slidesToShow: 1, // Количество слайдов  //
	slidesToScroll: 1, // Зависит от centerMode//
});


// Скрипт для адаптивного меню.//
$(document).ready(function(){
	var touch = $('#responsive-menu');
	var menu = $('#menu');

	$(touch).on('click', function(e) {
	    e.preventDefault();
	    menu.slideToggle();
	});
	$(window).resize(function(){
	    var wid = $(window).width();
	    if(wid > 768 && menu.is(':hidden')) {
	        menu.removeAttr('style');
	    }
	});
});

/*// При выходе из области меню, но скрывается
$('#menu').click(function() {
    $('#menu').hide(600);
});

// При нажатии на кнопку показывает/скрывает меню
$('#responsive-menu').click(function(){
    $('#menu').animate({opacity: 'toggle', height: 'toggle'}, 600);
});*/


// Скрипт для плавной прокрутки по якорным ссылкам (навигации).//
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});


/*Делаем отступ вверху при переходе по якорным ссылкм (header__nav:fixed;) */
$(function() {
	var menuhe = $('#menu').height(); // высота меню
	var menu = menuhe+20; // прибавляем 20
$("area[href*=#],a[href*=#]:not([href=#]):not([href^='#tab']):not([href^='#quicktab']):not([href^='#pane']):not([href *= '#inline'])").click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html,body').animate({
scrollTop: target.offset().top - menu
},1500);
return false;
}
}
});
});


/*Модальное окно*/

