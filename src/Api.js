const API_KEY = 'd94bcd435b62a031771c35633f9f310a';
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily";


export const WEATHER_FORECAST = (loc) => `${URL}?q=${loc}&units=metric&cnt=12&appid=${API_KEY}`;