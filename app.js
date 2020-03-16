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

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;

trainName = $("#trainName").val().trim();
destination = $("#destination").val().trim();
firstTrain = $("#firstTrain").val().trim();
frequency = $("#frequency").val().trim();


database.ref().set({
trainName: trainName,
destination: destination,
firstTrain: firstTrain,
frequency: frequency
});

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());

    $
})