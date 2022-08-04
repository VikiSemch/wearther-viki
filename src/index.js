let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = "0" + hours;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  hours = "0" + minutes;
}
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuesday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

document.getElementById("date").innerHTML = ` ${date}, ${day}`;

function showWeather(response) {
  document.querySelector("#cityname").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(cityname) {
  let apiKey = "435bb05a3bd8ac1e2c4d7c0df7d0cd4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metic`;
  axios.get(apiUrl).then(showWeather);
}

function search(event) {
  event.preventDefault();
  let cityname = document.querySelector("#search-input").value;
  searchCity(cityname);
}
let button = document.querySelector("#search-form");
button.addEventListener("click", search);

function searchlocation(position) {
  let apiKey = "435bb05a3bd8ac1e2c4d7c0df7d0cd4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metic`;
  axios.get(apiUrl).then(showWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchlocation);
}
let currentLocationButton = document.querySelector("#search-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
