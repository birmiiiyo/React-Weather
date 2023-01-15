import { EErrorActionType } from "@store/models/Error.model";

export const errorAtDailyWeather = (message: string) => ({
    type: EErrorActionType.DAILY_WEATHER_ERROR,
    payload: message
})

export const errorAtHourlyWeather = (message: string) => ({
    type: EErrorActionType.HOURLY_WEATHER_ERROR,
    payload: message
})

export const errorAtTime = (message: string) => ({
    type: EErrorActionType.TIME_ERROR,
    payload: message
})

export const errorAtLocation = (message: string) => ({
    type: EErrorActionType.LOCATION_ERROR,
    payload: message
})

export const errorAtCalendar = (message:string) => ({
    type: EErrorActionType.CALENDAR_ERROR,
    payload: message
})