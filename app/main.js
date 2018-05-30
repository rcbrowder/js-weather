var weatherButton = document.getElementById('weatherButton');

// Output variables
var output = document.getElementById('output');
var cityOutput = document.getElementById('cityOutput');
var tempK = document.getElementById('temperatureOutputK');
var tempF = document.getElementById('temperatureOutputF');
var tempC = document.getElementById('temperatureOutputC');
var condition = document.getElementById('condition');
var weatherImage = document.getElementById('weatherImage');



// Waits for page to load before firing
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Initialize your application or run some code.
		weatherButton.onclick = getWeather;
	}
};

function getWeather() {

	// Code that fetches data from the API URL and stores it in results.

	// if results.cod = 200


		cityOutput.innerHTML = results.name;
		tempK.innerHTML = Math.round(results.main.temp) + ' K';
		tempF.innerHTML = convertKtoF(results.main.temp) + '&deg; F';
		tempC.innerHTML = convertKtoC(results.main.temp) + '&deg; C';
		condition.innerHTML = results.weather[0].description;

		output.style.display = 'block';

	// else if cod = 401



	// else if cod = 404



	// else


}

function convertKtoF(kelvin) {
	var fahr = kelvin * (9/5) - 459.67;
	return Math.round(fahr);
}

function convertKtoC(kelvin) {
	var cel = kelvin - 273.15;
	return Math.round(cel);
}
