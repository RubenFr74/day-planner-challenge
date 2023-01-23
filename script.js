// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Var for current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Event Lisener for save btn
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

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
    $("#hour-9 .description").val(localStorage.getItem("hour9"));
    $("#hour-10 .description").val(localStorage.getItem("hour10"));
    $("#hour-11 .description").val(localStorage.getItem("hour11"));
    $("#hour-12 .description").val(localStorage.getItem("hour12"));
    $("#hour-1 .description").val(localStorage.getItem("hour1"));
    $("#hour-2 .description").val(localStorage.getItem("hour2"));
    $("#hour-3 .description").val(localStorage.getItem("hour3"));
    $("#hour-4 .description").val(localStorage.getItem("hour4"));
    $("#hour-5 .description").val(localStorage.getItem("hour5"));

    blockTime();

});

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  