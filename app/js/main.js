'use strict';

const swiper = new Swiper('.swiper', {
	navigation: {
		prevEl: '.swiper-btn-prev',
		nextEl: '.swiper-btn-next',
	},
	grabCursor: true,
	speed: 1000,
	effect: 'flip',
	loop: true,
});

const modal = document.querySelector('.modal'),
	showBtn = document.querySelector('.modal-show'),
	closeBtn = document.querySelector('.modal-close');
showBtn.addEventListener('click', () => modal.classList.add('active'));
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
