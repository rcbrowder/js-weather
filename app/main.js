var weatherButton = document.getElementById('weatherButton');
var results = [];
// Output variables
var cityOutput = document.getElementById('cityOutput');
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
    cityOutput.innerHTML = results.name;
    tempK.innerHTML = Math.round(results.main.temp) + ' K';
    tempF.innerHTML = convertKtoF(results.main.temp) + ' F&deg';
    tempC.innerHTML = convertKtoC(results.main.temp) + ' C&deg';
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

// if zip is bad output looks like:
// {
// cod: "404",
// message: "city not found"
// }
