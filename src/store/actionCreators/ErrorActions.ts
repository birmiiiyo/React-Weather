export const setErrorAtDailyWeather = (message: string) =>
  <const>{
    type: 'DAILY_WEATHER_ERROR',
    payload: message,
  }

export const setErrorAtHourlyWeather = (message: string) =>
  <const>{
    type: 'HOURLY_WEATHER_ERROR',
    payload: message,
  }

export const setErrorAtTime = (message: string) =>
  <const>{
    type: 'TIME_ERROR',
    payload: message,
  }

export const setErrorAtLocation = (message: string) =>
  <const>{
    type: 'LOCATION_ERROR',
    payload: message,
  }
