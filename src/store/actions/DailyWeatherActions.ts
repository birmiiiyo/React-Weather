import { EDailyWeatherActionType,IDailyWeatherState } from "@store/models/DailyWeather.model";

export const getDailyWeather = () => ({
    type: EDailyWeatherActionType.GET_DAILY_WEATHER
})

export const setDailyWeather = (newLocation: IDailyWeatherState) => ({
    type: EDailyWeatherActionType.SET_DAILY_WEATHER, 
    payload: newLocation
    }
)
