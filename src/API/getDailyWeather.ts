import { IOpenWeather } from '@interfaces/OpenWeather.weather'
import { IPositionProps } from '@interfaces/LatLonProps';
import axios from 'axios'

export const getDailyWeather = async ({lat,lon}: IPositionProps)=>{
    const request = await axios.get<IOpenWeather>(`${process.env.OPEN_WEATHER_WEATHER_PATH}?lat=${lat}&lon=${lon}&cnt=7&appid=${process.env.OPEN_WEATHER_API_key}`)
    return request.data
}