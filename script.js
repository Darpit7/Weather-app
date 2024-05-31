const apiKey = "f14f0cae0814da6e29d9cec9effafbdb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "imgs/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "imgs/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "imgs/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "imgs/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "imgs/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
