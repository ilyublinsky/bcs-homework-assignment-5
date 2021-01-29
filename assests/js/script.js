//function to add current date
$(document).ready(function() {
    var dateParagraph = $("#currentDate");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
    });

//to save the user's input of text into each time slot....

var input_textarea1 = document.querySelector('#note1');
var save_button1 = document.querySelector('#saveNote1');
input_textarea1.value = localStorage.getItem('content1');
saveNote1.addEventListener('click', updateOutput1);
function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
};