// Variables 
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var curTime = moment().format("HH");
console.log(curTime);

$(document).ready(function() {

    $("#currentDay").text("Today is " + moment().format("MMMM Do YYYY, h:mm:ss a'"));
    
    // For loop & if statement for past/present/future
    function timeSlot() {
        var curTime = moment().hours();
        $(".time-block").each(function () {
            var calendarHour = parseInt($(this).attr("id"));
            console.log(calendarHour);
            if (calendarHour < curTime) {
                $(this).addClass("past");
            } else if (calendarHour === curTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    timeSlot()

    // Function for save buttons
    function saveData(){

    $(".saveBtn").click(function(event){
        event.preventDefault();

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    })
}
saveData();
})

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(window.localStorage.getItem("10"));
$("#11 .description").val(window.localStorage.getItem("11"));
$("#12 .description").val(window.localStorage.getItem("12"));
$("#13 .description").val(window.localStorage.getItem("13"));
$("#14 .description").val(window.localStorage.getItem("14"));
$("#15 .description").val(window.localStorage.getItem("15"));
$("#16 .description").val(window.localStorage.getItem("16"));
$("#17 .description").val(window.localStorage.getItem("17"));