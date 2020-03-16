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
var firstTrain = moment($("#firstTrain-input").val().trim().format("HH:mm"));
var frequency = $("#frequency-input").val().trim();

var newTrain = {
  train: trainName,
  stop: destination,
  begin: firstTrain,
  occur: frequency
};

database.ref().push(newTrain);

console.log(newTrain.train);
console.log(newTrain.stop);
console.log(newTrain.begin);
console.log(newTrain.occur);

alert("New Train Successfully Scheduled");

$("#trainName-input").val("");
$("#destination-input").val("");
$("#firstTrain-input").val("");
$("#frequency-input").val("");
});



// database.ref().on("value", function(snapshot) {
    
// })