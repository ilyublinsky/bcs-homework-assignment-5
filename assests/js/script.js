//function to add current date
$(document).ready(function() {
    var dateParagraph = $("#currentDate");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
    });