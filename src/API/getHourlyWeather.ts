import axios from 'axios'

import { ONE_DAY } from 'constants/index'
import { IStormGlass } from 'interfaces/StormGlass'
import { getUNIXformat } from 'utils/getUNIXformat'

interface HourlyAPIProps {
  lat: number
  lon: number
  time: string
}

export const getHourlyWeatherFromAPI = async ({
  lat,
  lon,
  time,
}: HourlyAPIProps) => {
  const request = await axios<IStormGlass>({
    url: `${process.env.STORMGLASS_PATH}`,
    method: 'GET',
    headers: {
      Authorization: `${process.env.STORM_GLASS_API_key}`,
    },
    params: {
      lat,
      lng: lon,
      params: 'airTemperature,pressure,currentSpeed,visibility,humidity',
      start: time,
      end: getUNIXformat(time) + ONE_DAY,
    },
  })
  return request.data
}
