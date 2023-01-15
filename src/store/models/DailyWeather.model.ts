import { City, List } from "@interfaces/OpenWeather.weather";

export interface IDailyWeatherState {
city: City | null;
list:List[] | null;
img: string
}

export enum EDailyWeatherActionType {
  SET_DAILY_WEATHER = 'SET_DAILY_WEATHER',
  GET_DAILY_WEATHER = 'GET_DAILY_WEATHER',
  SET_WEATHER_IMG = 'SET_WEATHER_IMG',
  GET_WEATHER_IMG = 'GET_WEATHER_IMG',
}

interface IDailyWeatherGet{
  type: EDailyWeatherActionType.GET_DAILY_WEATHER
}

interface IDailyWeatherSet{
  type: EDailyWeatherActionType.SET_DAILY_WEATHER;
  payload: {city: City, list:List[] };
}

interface IWeatherImgGet{
  type: EDailyWeatherActionType.GET_WEATHER_IMG
}

interface IWeatherImgSet{
  type: EDailyWeatherActionType.SET_WEATHER_IMG;
  payload: string;
}



export type TDailyWeatherType = IDailyWeatherSet | IDailyWeatherGet | IWeatherImgGet | IWeatherImgSet;