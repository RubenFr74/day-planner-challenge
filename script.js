// Var for current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Event Lisener for save btn
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // console.log(time)
        localStorage.setItem(time, text);
    });
          
    // Set up function to track time
     function blockTime() {
        var timeCurrent = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Check time, ad background color indicators, past, present, future
            if (timeCurrent > timeBlock) {
                $(this).removeClass("furture");
                $(this).removeClass("present");
                $(this).addClass("past");

            } else if (timeCurrent === timeBlock) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }

    // Set get items from local storage, input details
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));

    blockTime();

});