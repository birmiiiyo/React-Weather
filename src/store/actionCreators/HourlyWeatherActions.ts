import { IHourlyWeatherState } from 'store/reducers/HourlyWeatherReducer'

export const getHourlyWeather = () =>
  <const>{
    type: 'GET_HOURLY_WEATHER',
  }

export const setHourlyWeather = (newLocation: IHourlyWeatherState) =>
  <const>{
    type: 'SET_HOURLY_WEATHER',
    payload: newLocation,
  }
