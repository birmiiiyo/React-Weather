import { EHourlyWeatherActionType,IHourlyWeatherState} from "@store/models/HourlyWeather.model";

export const getHourlyWeather = () => ({
    type: EHourlyWeatherActionType.GET_HOURLY_WEATHER
})

export const setHourlyWeather = (newLocation: IHourlyWeatherState) => ({
    type: EHourlyWeatherActionType.SET_HOURLY_WEATHER, 
    payload: newLocation
    }
)
