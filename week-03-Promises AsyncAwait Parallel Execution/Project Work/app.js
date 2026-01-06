// 1. IMPORTS
import API from './config.js';

// 2. DOM ELEMENTS (Module Scoped - Safe & Accessible to all functions below)
// Search Input field
const searchInput = document.getElementById("city-input");
// Search Button
const searchBtn = document.getElementById("search-btn");
// Weather Info Container (Poora div)
const infoBox = document.getElementById("weather-info")
// City Name (h2)
const cityName = document.getElementById("city-name");
// Temperature (h1)
const tempBox = document.getElementById("temp");
// Description (p)
const descriptionBox = document.getElementById("description")
// Humidity
const humidityDetail = document.getElementById("humidity");
// Speed 
const speedDetail = document.getElementById("wind-speed");
//weather Icon
const weatherIcon=document.getElementById("weather-icon")
// Error Message (p with class error)
const errorBox = document.getElementById("error-message");
// 3. EVENT LISTENER (The Trigger)
searchBtn.addEventListener('click', () => {
    const citySearched = searchInput.value.trim();
    if (!citySearched || citySearched === "") {
        alert("enter correct city name first");
        return
    }
    console.log(`User entered:${citySearched}`);
    getWeatherData(citySearched)
    searchInput.value = "";
    return;
})
// 4. MAIN FUNCTION: FETCH WEATHER DATA (The Engine)
async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`;
    console.log("Fetching", url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found !Check spelling.");
            }
            if (response.status === 401) {
                throw new Error("API Key is not active yet. Wait 10 mins.");
            }
            throw new Error("Something went wrong please try again!");
        }
        const data = await response.json();
        console.log(data);
        updateUI(data);
    }
    catch (error) {
        console.log(error);
        errorBox.textContent = error.message;
        errorBox.classList.remove("hidden");
    }
}
function updateUI(weatherObject) {
    errorBox.classList.add("hidden");
    const {
         name, //city name
         sys: {country}, //country abrivation
         main: {
             temp, //temperature
             humidity 
            }, 
            weather,//weather array having description and other details
         wind: {//object of wind details
             deg,
             speed 
            } 
        } = weatherObject;
        const {description,icon}=weather[0];
//updated UI with fetched data 
    cityName.textContent = `${name}, ${country}`;
    tempBox.textContent = `${Math.round(temp)}°C`;
    descriptionBox.textContent =description;
    speedDetail.textContent = `${Math.round(speed*3.6)} km/h,Deg:${deg}`;
    humidityDetail.textContent = humidity+"%";
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = weather[0].description;
}