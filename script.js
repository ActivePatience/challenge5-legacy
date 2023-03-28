// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var timeRange = [9,18];

  // Pulls ID of parent element of the button pushed and saves its innerHTML into local storage.
  $(".saveBtn").click(function(){
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(hourId, $('#' + hourId).innerHTML); // Saves it.
    console.log($('#' + hourId).innerHTML);
  });
  
  var timeClass = '';
  var currentTime = new Date();
  var day = currentTime.getDate();
  var crnt = currentTime.getHours();
  var html = '';

  for (let i = timeRange[0]; i < timeRange[1]; i++) {
    $("#mainDiv").append('<div id="hour-' + i + '"></div>');
  }

  for (let i = timeRange[0]; i < timeRange[1]; i++) {
    // Get current time, sets timeClass
    if(crnt > i){timeClass = 'past';}
    if(crnt == i){timeClass = 'present';}
    if(crnt < i){timeClass = 'future';}

    // Get relevant info from storage if available
    if(localStorage.getItem("hour-" + i)){ html = localStorage.getItem("hour-" + i); }
    else {
      console.log(i);
      html = `
      <div class="row time-block ` + timeClass + `">
            <div class="col-2 col-md-1 hour text-center py-3">` + i + `:00</div>
            <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save">
              <i class="fas fa-save" aria-hidden="true"></i>
            </button>
      </div>
    `;
    }
    $('#hour-' + i).append(html);
  }
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
});