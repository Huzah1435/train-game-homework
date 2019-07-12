var config = {
    apiKey: "AIzaSyDw0vWLjRIG1iulnFWkP8eYdg1CDAobtmI",
    // authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    databaseURL: "https://homework7train.firebaseio.com/",
    projectId: "homework7train"
    // storageBucket: "fir-click-counter-7cdb9.appspot.com"
};

firebase.initializeApp(config);

// Variables
// ================================================================================

// Get a reference to the database service
var database = firebase.database();
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainStart = $("#start-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      start: trainStart,
      frequency: trainFrequency
    };
  
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().frequency;
  
    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStart);
    console.log(trainFrequency);
  
    // Prettify the train start
    var trainStartPretty = moment.unix(trainStart).format("HH:MM:SS");
  
    // Calculate the time worked using hardcore math
    // To calculate the time worked
//     var empMonths = moment().diff(moment(empStart, "X"), "months");
//     console.log(empMonths);
  
//     // Calculate the total billed rate
//     var empBilled = empMonths * empRate;
//     console.log(empBilled);
  
//     // Create the new row
//     var newRow = $("<tr>").append(
//       $("<td>").text(empName),
//       $("<td>").text(empRole),
//       $("<td>").text(empStartPretty),
//       $("<td>").text(empMonths),
//       $("<td>").text(empRate),
//       $("<td>").text(empBilled)
//     );
  
//     // Append the new row to the table
//     $("#employee-table > tbody").append(newRow);
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  