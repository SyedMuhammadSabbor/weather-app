const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='; 
const apiKey = 'fb1425ef8b033d14b873aa81b007f547';
const searchText = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchbtn");
let weatherPic = document.querySelector(".weatherimg"); // Changed from const to let

async function checkWeather(city) {
    let response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".weather h2").innerHTML = data.name;
    document.querySelector(".weather h1").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector("#windspeed").innerHTML = data.wind.speed + "km/h";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
        weatherPic.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherPic.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
        weatherPic.src = "images/clear.png";
    } else if (data.weather[0].main == "Snow") {
        weatherPic.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
        weatherPic.src = "images/mist.png";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchText.value);
});

searchText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchText.value);
    }
});
