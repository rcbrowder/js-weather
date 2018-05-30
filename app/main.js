var weatherButton = document.getElementById('weatherButton');

// Output variables
var output = document.getElementById('output');
var cityOutput = document.getElementById('cityOutput');
var tempK = document.getElementById('temperatureOutputK');
var tempF = document.getElementById('temperatureOutputF');
var tempC = document.getElementById('temperatureOutputC');
var condition = document.getElementById('condition');

var results = {
	coord: {
		lon: -84.49,
		lat: 38.02
	},
	weather: [
		{
			id: 801,
			main: "Clouds",
			description: "few clouds",
			icon: "02d"
		}
	],
	base: "stations",
	main: {
		temp: 301.17,
		pressure: 1013,
		humidity: 65,
		temp_min: 300.15,
		temp_max: 302.15
	},
	visibility: 16093,
	wind: {
		speed: 5.1,
		deg: 90,
		gust: 8.2
	},
	clouds: {
		all: 20
	},
	dt: 1527614100,
	sys: {
		type: 1,
		id: 1138,
		message: 0.0038,
		country: "US",
		sunrise: 1527589076,
		sunset: 1527641604
	},
	id: 420013316,
	name: "Lexington",
	cod: 200
};

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

// URL pattern to follow is http://api.openweathermap.org/data/2.5/weather?zip=<zipCode>&us&appid=<myAPIKey>

// If zip and API key are good, output looks like:
// {
// coord: {
// lon: -84.49,
// lat: 38.02
// },
// weather: [
// {
// id: 801,
// main: "Clouds",
// description: "few clouds",
// icon: "02d"
// }
// ],
// base: "stations",
// main: {
// temp: 301.17,
// pressure: 1013,
// humidity: 65,
// temp_min: 300.15,
// temp_max: 302.15
// },
// visibility: 16093,
// wind: {
// speed: 5.1,
// deg: 90,
// gust: 8.2
// },
// clouds: {
// all: 20
// },
// dt: 1527614100,
// sys: {
// type: 1,
// id: 1138,
// message: 0.0038,
// country: "US",
// sunrise: 1527589076,
// sunset: 1527641604
// },
// id: 420013316,
// name: "Lexington",
// cod: 200
// }

// If zip is bad, output looks like:
// {
// cod: "404",
// message: "city not found"
// }


// If my API key is bad or missing, output looks like:
// {
// cod: 401,
// message: "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
// }