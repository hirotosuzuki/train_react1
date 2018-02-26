// @flow
export default class CurrentWeather{
  // flowによる静的型チェック
  main: string;
  iconURL: string;

  constructor(data: *){
    const {weather} = data;
    this.main = weather[0].main;
    this.iconURL = 'https://openweathermap.org/img/w/'
    + `${weather[0].icon}.png`;
  }
}
