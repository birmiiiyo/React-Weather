import { IOpenWeather } from '@types/OpenWeather.weather'
import { IPositionProps } from '@types/LatLonProps';
import axios from 'axios'

export const getDailyWeather = async ({lat,lon}: IPositionProps)=>{
    const request = await axios.get<IOpenWeather>(`${process.env.OPEN_WEATHER_WEATHER_PATH}?lat=${lat}&lon=${lon}&cnt=5&appid=${process.env.OPEN_WEATHER_API_key}`)
    return request.data
}