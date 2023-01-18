export interface IErrorState {
  locationError: string
  dailyWeatherError: string
  hourlyWeatherError: string
  calendarError: string
  timeError: string
}

export enum EErrorActionType {
  DAILY_WEATHER_ERROR = 'DAILY_WEATHER_ERROR',
  LOCATION_ERROR = 'LOCATION_ERROR',
  TIME_ERROR = 'TIME_ERROR',
  HOURLY_WEATHER_ERROR = 'HOURLY_WEATHER_ERROR',
  CALENDAR_ERROR = 'CALENDAR_ERROR',
}

interface IDailyWeatherError {
  type: EErrorActionType.DAILY_WEATHER_ERROR
  payload: string
}

interface IHourlyWeatherError {
  type: EErrorActionType.HOURLY_WEATHER_ERROR
  payload: string
}

interface ILocationError {
  type: EErrorActionType.LOCATION_ERROR
  payload: string
}
interface ITimeError {
  type: EErrorActionType.TIME_ERROR
  payload: string
}
interface ICalendarError {
  type: EErrorActionType.CALENDAR_ERROR
  payload: string
}

export type TErrorType =
  | IDailyWeatherError
  | IHourlyWeatherError
  | ILocationError
  | ITimeError
  | ICalendarError
