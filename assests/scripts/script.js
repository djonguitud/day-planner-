let currentDay = $('#currentDay');
let elTimeBlock = $('.time-block');
let elChameleon = $('textarea');
let currentTime = moment().format('HH');

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
