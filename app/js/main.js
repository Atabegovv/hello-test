'use strict';

$(function () {
	//E-mail Ajax Send
	$('form').submit(function () {
		//Change
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php', //Change
			data: th.serialize(),
		}).done(function () {
			alert('Thank you! \nRequest sent to reserve a table \nWe call you back');
			setTimeout(function () {
				// Done Functions
				th.trigger('reset');
			}, 1000);
		});
		return false;
	});
});

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
	overlay = document.querySelector('.overlay');
showBtn.addEventListener('click', () => modal.classList.add('active'));
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
overlay.addEventListener('click', () => modal.classList.remove('active'));
