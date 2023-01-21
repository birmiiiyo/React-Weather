import { City, List } from '@interfaces/OpenWeather.weather'

export const getDailyWeather = () =>
  <const>{
    type: 'GET_DAILY_WEATHER',
  }

export const setDailyWeather = (newLocation: { city: City; list: List[] }) =>
  <const>{
    type: 'SET_DAILY_WEATHER',
    payload: newLocation,
  }

export const getWeatherImg = () =>
  <const>{
    type: 'GET_WEATHER_IMG',
  }

export const setWeatherImg = (image: string) =>
  <const>{
    type: 'SET_WEATHER_IMG',
    payload: image,
  }
