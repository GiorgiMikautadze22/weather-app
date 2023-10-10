let input = document.querySelector("input");
let btn = document.querySelector("button");
let temp = document.getElementById("temp");
let form = document.querySelector("form");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let weather = document.getElementById("weather");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=fc4ce0773310691aef04ca2cc7276020&units=metric`
  ).then((res) =>
    res.json().then((data) => {
      let trimmedInp = input.value.trim();
      if (trimmedInp !== "") {
        console.log(data);
        temp.innerHTML = Math.floor(data.main.temp) + "°C";
        temp.style.fontSize = "50px";

        input.value = "";
        humidity.innerHTML = data.main.humidity + "%";

        windSpeed.innerHTML = data.wind.speed + " " + "km/h";
      } else {
        temp.innerHTML = "Error";
      }
      if (data.weather[0].main === "Clear") {
        weather.src = "./images/clear.png";
      } else if (data.weather[0].main === "Clouds") {
        weather.src = "./images/clouds.png";
      } else if (data.weather[0].main === "Rain") {
        weather.src = "./images/rain.png";
      } else if (data.weather[0].main === "Snow") {
        weather.src = "./images/snow.png";
      } else if (data.weather[0].main === "Mist") {
        weather.src = "./images/mist.png";
      } else if (data.weather[0].main === "Drizzle") {
        weather.src = "./images/drizzle.png";
      }
    })
  );
});
