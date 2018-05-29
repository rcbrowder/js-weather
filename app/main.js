var weatherButton = document.getElementById('weatherButton');




// Waits for page to load before firing
document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        // Initialize your application or run some code

        weatherButton.onclick = getWeather;
    }
};








function getWeather() {
    alert('Test function ran');
}
















// URL pattern to follow is http://api.openweathermap.org/data/2.5/forecast?id=blahblahblah

// if zip is bad output looks like:
// {
// cod: "404",
// message: "city not found"
// }
