import axios from 'axios'

import { IStormGlass } from 'interfaces/StormGlass'

import { ONE_DAY } from 'constants/index'

import { getUNIXformat } from 'utils/getUNIXformat'

interface HourlyAPIProps {
  lat: number
  lon: number
  formatted: string
}

export const getHourlyWeatherFromAPI = async ({
  lat,
  lon,
  formatted,
}: HourlyAPIProps) => {
  const request = await axios<IStormGlass>({
    url: `${process.env.STORMGLASS_PATH}`,
    method: 'GET',
    headers: {
      Authorization: `${process.env.STORM_GLASS_API_key}`,
    },
    params: {
      lat: lat,
      lng: lon,
      params: 'airTemperature,pressure,currentSpeed,visibility,humidity',
      start: getUNIXformat(formatted),
      end: getUNIXformat(formatted) + ONE_DAY,
    },
  })
  return request.data
}
