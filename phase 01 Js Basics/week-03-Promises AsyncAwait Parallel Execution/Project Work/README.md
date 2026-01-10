# 🌦️ WeatherPro Dashboard

A modern, responsive weather application built with vanilla JavaScript that provides real-time weather information using the OpenWeatherMap API.
## Preview
![Weather App Preview](./screenshots/Screenshot%20Desktop.png)

## 🌟 Features

### Core Functionality
- **City Search**: Search weather for any city worldwide
- **Real-time Data**: Current temperature, humidity, wind speed, and weather conditions
- **Weather Icons**: Dynamic icons based on weather conditions
- **Auto-Detection**: Automatic geolocation to show local weather on first load
- **Persistent Storage**: Remembers last searched city using localStorage
- **Keyboard Support**: Press Enter to search

### User Experience
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages for network issues and invalid cities
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dynamic Theming**: Background changes based on weather conditions (sunny/cloudy)
- **City Time Display**: Shows local time for searched city

## 🛠️ Technologies Used

### Core Stack
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS variables and animations
- **JavaScript (ES6+)**: Async/await, modules, destructuring

### Skills Demonstrated
**Week 3 Mastery:**
- ✅ Fetch API with async/await
- ✅ Promise-based error handling
- ✅ localStorage for data persistence
- ✅ Geolocation API integration
- ✅ JSON data parsing and manipulation

**Best Practices:**
- Modular code with ES6 imports
- Separation of concerns (fetch vs UI logic)
- Input validation and sanitization
- Responsive design patterns
- Accessible HTML structure

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- OpenWeatherMap API key (free tier)
- Internet connection for API calls

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/weatherpro-dashboard.git
cd weatherpro-dashboard
```

### 2. Get API Key
1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for free account
3. Get your API key from dashboard
4. Wait 10-15 minutes for activation

### 3. Configure API Key
Create `config.js` in root directory:
```javascript
// config.js
const API = 'YOUR_API_KEY_HERE';
export default API;
```

**Important:** Add `config.js` to `.gitignore` to keep API key secure!

### 4. Run Application
Simply open `index.html` in your browser or use Live Server in VS Code.

## 📁 Project Structure
```
weatherpro-dashboard/
├── index.html          # Main HTML structure
├── style.css           # Styling with CSS variables
├── app.js              # Main application logic
├── config.js           # API key (gitignored)
├── README.md           # Documentation
└── screenshots/        # Project screenshots
```

## 🎨 Key Features Explained

### 1. Geolocation Auto-Detect
```javascript
function urlByCoord(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                // Fetch weather using coordinates
            },
            (error) => {
                // Fallback to Lahore if permission denied
            }
        )
    }
}
```
On first load, app requests location permission. If granted, shows local weather. If denied, defaults to Lahore.

### 2. Persistent Storage
```javascript
function saveToHistory(city) {
    localStorage.setItem('lastCity', city);
}

window.addEventListener("DOMContentLoaded", () => {
    const savedCity = localStorage.getItem('lastCity');
    if (savedCity) {
        urlBycity(savedCity);
    }
});
```
Automatically loads last searched city when you return to the app.

### 3. Dynamic Background
```javascript
description === "clear sky" 
    ? mainBox.classList.add("blue-bg") 
    : mainBox.classList.add("grey-bg");
```
Background color changes based on weather conditions for better visual experience.

### 4. City Time Conversion
```javascript
function getCityTime(timeZone){
    const timeNow = new Date();
    const cityDate = new Date(
        (timeNow.getTime() + (timeNow.getTimezoneOffset() * 60000)) + (timeZone * 1000)
    );
    return cityDate;
}
```
Displays local time of searched city, not your device time.

## 🧪 Testing Checklist

- ✅ Search valid city (Lahore, London, New York)
- ✅ Search invalid city (shows error)
- ✅ Test without internet (shows network error)
- ✅ Press Enter key to search
- ✅ Refresh page (last city loads)
- ✅ Allow geolocation (shows local weather)
- ✅ Deny geolocation (defaults to Lahore)
- ✅ Mobile responsive view

## 🐛 Known Issues & Limitations

1. **Free API Limits**: 60 calls/minute, 1000 calls/day
2. **No Forecast**: Only current weather (5-day forecast can be added)
3. **Single City Storage**: Only remembers last city (history feature can be added)

## 🚀 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Search history (last 5 cities)
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Weather alerts and warnings
- [ ] Favorite cities list
- [ ] Hourly forecast
- [ ] Air quality index
- [ ] UV index display

## 🎓 Learning Outcomes

### Technical Skills Gained
- **Asynchronous JavaScript**: Mastered async/await patterns and promise handling
- **API Integration**: Learned to consume RESTful APIs with proper error handling
- **DOM Manipulation**: Dynamic content updates based on API responses
- **Browser APIs**: Geolocation API and localStorage implementation
- **Error Handling**: Comprehensive error scenarios (network, 404, 401)

### Problem-Solving Experience
- Handling timezone conversions for different cities
- Managing loading states for better UX
- Fallback strategies when APIs fail
- Input validation and sanitization

## 📊 Project Statistics

- **Development Time**: 12 hours (2 days)
- **Lines of Code**: ~300 (HTML + CSS + JS)
- **API Calls**: 1 endpoint (current weather)
- **Features**: 8 core + 3 advanced
- **Browser Compatibility**: Chrome, Firefox, Safari, Edge

## 💡 Key Code Highlights

### Async Error Handling
```javascript
async function getWeatherData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found!");
            }
            throw new Error("Something went wrong!");
        }
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        errorBox.textContent = error.message;
        errorBox.classList.remove("hidden");
    }
}
```
**Why This Matters**: Demonstrates understanding of HTTP status codes, promise rejection handling, and user-friendly error messaging.

### Nested Destructuring
```javascript
const {
    name,
    sys: { country },
    main: { temp, humidity },
    weather,
    wind: { deg, speed },
    timezone
} = weatherObject;
```
**Why This Matters**: Shows advanced ES6 knowledge and clean data extraction from complex API responses.

## 🙏 Acknowledgments

- **OpenWeatherMap**: For providing free weather API
- **Font Awesome**: For icons
- **Week 3 Curriculum**: Async JavaScript mastery enabled this project

## 📧 Contact & Portfolio

**Developer**: Sharjeel Arshad  
**Location**: Lahore, Pakistan  
**GitHub**: https://github.com/SharjeelArshad0220   
**LinkedIn**: https://www.linkedin.com/in/sharjeel-arshad-dev/

**Part of**: 100-Day MERN Stack Journey  
**Phase**: Phase 1 - JavaScript Mastery (Week 3 Capstone)

---

## 📝 Version History

**v1.0.0** (January 6, 2026)
- Initial release
- Core weather functionality
- Geolocation support
- localStorage persistence
- Responsive design

---

**Built with ❤️ in Lahore, Pakistan**

*This project demonstrates practical application of asynchronous JavaScript, API integration, and modern web development practices learned during Week 3 of intensive MERN stack training.*