let currentDay = $('#currentDay');
let elTimeBlock = $('.time-block');
let elChameleon = $('textarea');
let currentTime = moment().format('HH');
let elSubmit = $('form');
let elResetBtn = $('.yellow-btn');
let elPopUp = $('.popUp');
let tasks = {};

//! Setting and displaying current day
currentDay.text(moment().format('MMMM Do YYYY'));

//!Change time block color depending on the hour
function timeColor() {
	elChameleon.each((i) => {
		let index = Number(elChameleon[i].dataset.time);
		let now = Number(currentTime);

		if (index === now) {
			elChameleon.eq(i).addClass('present');
			console.log('present');
		} else if (index > now) {
			console.log('future');
			elChameleon.eq(i).addClass('future');
		} else if (index < now) {
			elChameleon.eq(i).addClass('past');
			console.log('past');
		}
	});
}

//!Events handlers

elSubmit.submit(sendLocalStorage);

//! Input task send to local storage
function sendLocalStorage(event) {
	event.preventDefault();
	let counter = 09;

	elChameleon.each(function (i) {
		let valueText = this.value;
		tasks['task' + String(counter)] = valueText.trim();

		counter += 1;
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));

	succesful();
	hide();
}

//! Place local storage values in textareas

let comeBack = localStorage.getItem('tasks');
let parsed = JSON.parse(comeBack);

if (parsed) {
	$('[data-time="09"]').text(parsed.task9);
	$('[data-time="10"]').text(parsed.task10);
	$('[data-time="11"]').text(parsed.task11);
	$('[data-time="12"]').text(parsed.task12);
	$('[data-time="13"]').text(parsed.task13);
	$('[data-time="14"]').text(parsed.task14);
	$('[data-time="15"]').text(parsed.task15);
	$('[data-time="16"]').text(parsed.task16);
	$('[data-time="17"]').text(parsed.task17);
} else {
	false;
}

//!Reset tasks
elResetBtn.on('click', function () {
	localStorage.clear(tasks);
	$('[data-time="09"]').text('');
	$('[data-time="10"]').text('');
	$('[data-time="11"]').text('');
	$('[data-time="12"]').text('');
	$('[data-time="13"]').text('');
	$('[data-time="14"]').text('');
	$('[data-time="15"]').text('');
	$('[data-time="16"]').text('');
	$('[data-time="17"]').text('');
	window.location.reload(true);
});

//! Appear popUp succesful save in local storage
function succesful() {
	if (elPopUp.css('display', 'none')) {
		elPopUp.css('display', 'block');
	} else {
	}
}

//! Remove popup
function hide() {
	if (elPopUp.css('display', 'block')) {
		setInterval(function () {
			elPopUp.css('display', 'none');
			clearInterval();
		}, 4000);
	}
}

timeColor();
