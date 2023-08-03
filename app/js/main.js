'use strict';

const swiper = new Swiper('.swiper', {
	navigation: {
		prevEl: '.swiper-btn-prev',
		nextEl: '.swiper-btn-next',
	},
	grabCursor: true,
	speed: 1000,
	effect: 'flip',
	loop: true
});