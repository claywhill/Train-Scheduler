var config = {
    apiKey: "AIzaSyDUkIS_earn0ndvYosnbG35Cnobgg-sQ78",
    authDomain: "denver-bootcamp-ch.firebaseapp.com",
    databaseURL: "https://denver-bootcamp-ch.firebaseio.com",
    projectId: "denver-bootcamp-ch",
    storageBucket: "denver-bootcamp-ch.appspot.com",
    messagingSenderId: "59261188522",
    appId: "1:59261188522:web:6710771732e879402293d3"
  };

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
  event.preventDefault();

var trainName = $("#trainName-input").val().trim();
var destination = $("#destination-input").val().trim();
var firstTrain = $("#firstTrain-input").val().trim();
var frequency = $("#frequency-input").val().trim();

var newTrain = {
  train: trainName,
  stop: destination,
  begin: firstTrain,
  occur: frequency
};

database.ref().push(newTrain);

alert("New Train Successfully Scheduled");

$("#trainName-input").val("");
$("#destination-input").val("");
$("#firstTrain-input").val("");
$("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {

  var trainName = childSnapshot.val().train;
  var destination = childSnapshot.val().stop;
  var firstTrain = moment(childSnapshot.val().begin, "HH:mm").subtract(1, "years");
  var frequency = childSnapshot.val().occur;

  var diffTime = moment().diff(moment(firstTrain), "minutes");

  var tRemainder = diffTime % frequency;

  var minutesTillTrain = frequency - tRemainder;

  var nextTrain = moment().add(minutesTillTrain, "minutes").format("hh:mm A MM/DD/YY");

  var newRow = $(`
          <tr>
            <th scope="row">${trainName}</th>
            <td>${destination}</td>
            <td>${frequency}</td>
            <td>${nextTrain}</td>
            <td>${minutesTillTrain}</td>
          </tr>
  `)

$('tbody').append(newRow)

});