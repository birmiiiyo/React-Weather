import { City, List } from "@interfaces/OpenWeather.weather";

export interface IDailyWeatherState {
city: City | null;
list:List[] | null;
}

export enum EDailyWeatherActionType {
  SET_DAILY_WEATHER = 'SET_DAILY_WEATHER',
  GET_DAILY_WEATHER = 'GET_DAILY_WEATHER'
}

interface IDailyWeatherGet{
  type: EDailyWeatherActionType.GET_DAILY_WEATHER
}

interface IDailyWeatherSet{
  type: EDailyWeatherActionType.SET_DAILY_WEATHER;
  payload: IDailyWeatherState;
}

export type TDailyWeatherType = IDailyWeatherSet | IDailyWeatherGet;