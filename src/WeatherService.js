// @flow
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import {MY_KEY} from '../settings_local';

const BASE_URL   = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = MY_KEY;

// endpointとなるURLを生成する関数
function getCurrentWeatherEndpoint(query: string){
  return `${BASE_URL}weather?q=${query}`
      + `&appid=${API_KEY}&lang=ja`;
}

// APIと通信しjsonオブジェクトを得る関数
function getCurrentWeather(city: string)
  : Promise<CurrentWeather>{
    const endpoint = getCurrentWeatherEndpoint(city);
    return fetch(endpoint)
      .then(response => response.json())
      .then(json => new CurrentWeather(json));
  }

  function getWeatherForecastEndpoint(query: string) {
    console.log(`${BASE_URL}forecast?q=${query}&appid=${API_KEY}&lang=ja`)
    return `${BASE_URL}forecast?q=${query}&appid=${API_KEY}&lang=ja`;
  }


  function getWeatherForecast(city: *): Promise<WeatherForecast[]> {
    const endpoint = getWeatherForecastEndpoint(city);
    return fetch(endpoint)
      .then(response => response.json())
      .then(json => json.list.map(item => new WeatherForecast(item)));
  }

  export { getCurrentWeather, getWeatherForecast };
