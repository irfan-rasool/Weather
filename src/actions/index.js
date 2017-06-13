import axios from 'axois';

const API_KEY = 'ad98ccab286908cfec56bd34cf85c676';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}