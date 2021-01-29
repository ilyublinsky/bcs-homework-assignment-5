//Function to add current day of the week
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

//function to add current date
$(document).ready(function() {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
});

//"CLEAR ALL" button funtion - refreshes page
$("#clear").click(function() {
    localStorage.clear();
    location.reload()
});

//saving info on input note 1

var input_textarea1 = document.querySelector('#note1');
var save_button1 = document.querySelector('#saveNote1');
input_textarea1.value = localStorage.getItem('content1');
saveNote1.addEventListener('click', updateOutput1);
function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
};

//saving info on input note 2
var input_textarea2 = document.querySelector('#note2');
var save_button2 = document.querySelector('#saveNote2');
input_textarea2.value = localStorage.getItem('content2');
saveNote2.addEventListener('click', updateOutput2);
function updateOutput2() {
	localStorage.setItem('content2', input_textarea2.value);
};

//saving info on input note 3
var input_textarea3 = document.querySelector('#note3');
var save_button3 = document.querySelector('#saveNote3');
input_textarea3.value = localStorage.getItem('content3');
saveNote3.addEventListener('click', updateOutput3);
function updateOutput3() {
	localStorage.setItem('content3', input_textarea3.value);
};

//saving info on input note 4
var input_textarea4 = document.querySelector('#note4');
var save_button4 = document.querySelector('#saveNote4');
input_textarea4.value = localStorage.getItem('content4');
saveNote4.addEventListener('click', updateOutput4);
function updateOutput4() {
	localStorage.setItem('content4', input_textarea4.value);
};

//saving info on input note 5
var input_textarea5 = document.querySelector('#note5');
var save_button5 = document.querySelector('#saveNote5');
input_textarea5.value = localStorage.getItem('content5');
saveNote5.addEventListener('click', updateOutput5);
function updateOutput5() {
	localStorage.setItem('content5', input_textarea5.value);
};

//saving info on input note 6
var input_textarea6 = document.querySelector('#note6');
var save_button6 = document.querySelector('#saveNote6');
input_textarea6.value = localStorage.getItem('content6');
saveNote6.addEventListener('click', updateOutput6);
function updateOutput6() {
	localStorage.setItem('content6', input_textarea6.value);
};

//saving info on input note 7
var input_textarea7 = document.querySelector('#note7');
var save_button7 = document.querySelector('#saveNote7');
input_textarea7.value = localStorage.getItem('content7');
saveNote7.addEventListener('click', updateOutput7);
function updateOutput7() {
	localStorage.setItem('content7', input_textarea7.value);
};

//saving info on input note 8
var input_textarea8 = document.querySelector('#note8');
var save_button8 = document.querySelector('#saveNote8');
input_textarea8.value = localStorage.getItem('content8');
saveNote8.addEventListener('click', updateOutput8);
function updateOutput8() {
	localStorage.setItem('content8', input_textarea8.value);
};

//saving info on input note 9
var input_textarea9 = document.querySelector('#note9');
var save_button9 = document.querySelector('#saveNote9');
input_textarea9.value = localStorage.getItem('content9');
saveNote9.addEventListener('click', updateOutput9);
function updateOutput9() {
	localStorage.setItem('content9', input_textarea9.value);
};