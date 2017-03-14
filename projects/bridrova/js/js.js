 //Скрипт для создания анимации (animation.css)//
 $(document).ready(function() {
 	$("#form1").animated("fadeIn", "fadeIn");
	$(".prem-brd-block").animated("zoomIn", "fadeOut");
	$(".item_right").animated("bounceInRight", "bounceOutRight");
	$(".item_left").animated("bounceInLeft", "bounceOutLeft");
	$(".box").animated("fadeIn", "fadeOut");
	$("#footer").animated("fadeIn", "fadeOut");
  });

 $(document).ready(function() {
 	$('.popup-btn').magnificPopup({
        type: 'inline',
        focus: '#name'
    });
});

//Скрипт для создания слайдера Slick//
$('.slider-briket_1').slick({
	initialSlide: 0, // С какого слайда начинать показывать (отсчет в js начинается c "0" ) // 
	autoplay: false,
	autoplaySpeed: 4000,// Скорость смены слайда // 
	speed: 1000, // Скорость анимации // 
	cssEase: 'ease-in-out', // Тип анимации // 
	dots: true, // Точки под слайдером // 
	adaptiveHeight: true,
	arrows: true,
	fade: true, // Слайды появляются из затемнения // 
	draggable: true, // Перелистывание слайдов свайпом //
	infinite: true, // Бесконечная прокрутка слайдов  //  
	vertical: false, // Вертикальное именение слайда // 
	slidesToShow: 1, // Количество слайдов  //
	slidesToScroll: 1, // Зависит от centerMode//
});


// Скрипт для плавной прокрутки по якорным ссылкам (навигации).//

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1500, 'swing', function () {
 window.location.hash = target;
 });
 });



/*$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});
*/

/*Делаем отступ вверху при переходе по якорным ссылкм (header__nav:fixed;) */
$(function() {
	var menuhe = $('#menu').height(); // высота меню
	var menu = menuhe + 60; // прибавляем 20
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

// Скрипт для адаптивного меню.//
$(document).ready(function(){
	var touch = $('#responsive-menu');
	var menu = $('#menu');

	$(touch).on('click', function(e) {
	    e.preventDefault();
	    menu.slideToggle();
	});
	
});


// При нажатии на кнопку показывает/скрывает меню
$(document).ready(function(){
  if(document.documentElement.clientWidth < 1199) {
	    $('.nav__link').click(function(){
	    $('#menu').animate({opacity: 'toggle', height: 'toggle'}, 600);
	});
  }
});
