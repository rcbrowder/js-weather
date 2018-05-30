var weatherButton = document.getElementById('weatherButton');
var results = [];
// Output variables
var output = document.getElementById('output');
var cityOutput = document.getElementById('cityOutput');
var conditions = document.getElementById('conditions');

var tempK = document.getElementById('kel');
var tempC = document.getElementById('cel');
var tempF = document.getElementById('far');

// Waits for page to load before firing
document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        // Initialize your application or run some code
        weatherButton.onclick = getWeather;


    }
};



function getWeather() {

    // Code that fetches data from API URL and stores it in results.

    // if results.code == 200

    cityOutput.innerHTML = results.name;
    tempK.innerHTML = Math.round(results.main.temp) + ' K';
    tempF.innerHTML = convertKtoF(results.main.temp) + ' F&deg';
    tempC.innerHTML = convertKtoC(results.main.temp) + ' C&deg';
    conditions.innerHTML = results.weather[0].description;

    output.style.display = 'block';

    // else if cod == 404

    // else if cod == 401

    //else
}

function convertKtoF (kelvin) {
    var convertedFtemp = kelvin * (9/5) - 459.67;
    return Math.round(convertedFtemp);
}

function convertKtoC(kelvin) {
    var convertedCtemp = kelvin - 273.15;
    return Math.round(convertKtoC);
}




// URL pattern to follow is http://api.openweathermap.org/data/2.5/forecast?id=blahblahblah

// If zip is bad output looks like:
// {
// cod: "404",
// message: "city not found"
// }
