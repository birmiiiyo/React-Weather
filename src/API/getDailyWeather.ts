import axios from 'axios'

import { IPositionProps } from 'interfaces/LatLonProps'
import { IOpenWeather } from 'interfaces/OpenWeather.weather'

export const getDailyWeatherFromAPI = async ({ lat, lon }: IPositionProps) => {
  const request = await axios.get<IOpenWeather>(
    `${process.env.OPEN_WEATHER_WEATHER_PATH}?lat=${lat}&lon=${lon}&cnt=7&appid=${process.env.OPEN_WEATHER_API_key}`,
  )
  return request.data
}
