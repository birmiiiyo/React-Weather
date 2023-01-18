import { EErrorActionType } from '@store/models/Error.model'

export const setErrorAtDailyWeather = (message: string) => ({
  type: EErrorActionType.DAILY_WEATHER_ERROR,
  payload: message,
})

export const setErrorAtHourlyWeather = (message: string) => ({
  type: EErrorActionType.HOURLY_WEATHER_ERROR,
  payload: message,
})

export const setErrorAtTime = (message: string) => ({
  type: EErrorActionType.TIME_ERROR,
  payload: message,
})

export const setErrorAtLocation = (message: string) => ({
  type: EErrorActionType.LOCATION_ERROR,
  payload: message,
})
