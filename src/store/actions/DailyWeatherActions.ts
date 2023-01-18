import { City, List } from '@interfaces/OpenWeather.weather'
import { EDailyWeatherActionType } from '@store/models/DailyWeather.model'

export const getDailyWeather = () => ({
  type: EDailyWeatherActionType.GET_DAILY_WEATHER,
})

export const setDailyWeather = (newLocation: { city: City; list: List[] }) => ({
  type: EDailyWeatherActionType.SET_DAILY_WEATHER,
  payload: newLocation,
})

export const getWeatherImg = () => ({
  type: EDailyWeatherActionType.GET_WEATHER_IMG,
})

export const setWeatherImg = (image: string) => ({
  type: EDailyWeatherActionType.SET_WEATHER_IMG,
  payload: image,
})
