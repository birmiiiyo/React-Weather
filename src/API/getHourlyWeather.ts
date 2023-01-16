import axios from 'axios'

import { StormGlass } from '@interfaces/StormGlass'

import { SEVEN_DAY } from 'constants/days'

import { getUNIXformat } from '@utils/getUNIXformat'

interface HourlyAPIProps {
    lat:number,
    lon:number,
    date:string
}

export const getHourlyWeatherFromAPI = async ({lat, lon, date}: HourlyAPIProps)=>{
     const request = await axios<StormGlass>({
        url: `${process.env.STORMGLASS_PATH}`,
        method: 'GET',
        headers:{
            'Authorization': `${process.env.STORM_GLASS_API_key}`
        },
        params:{
            lat: lat,
            lng: lon,
            params: 'airTemperature,pressure,currentSpeed,visibility,humidity',
            start: date,
            end: getUNIXformat(date) + SEVEN_DAY
        }
    })
    return request.data
}