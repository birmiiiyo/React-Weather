import { StormGlass } from '@interfaces/StormGlass'
import axios from 'axios'

interface HourlyAPIProps {
    lat:number,
    lon:number,
    date:string
}

export const getHourlyWeatherAPI = async ({lat,lon, date}: HourlyAPIProps)=>{
     const request = await axios<StormGlass>({
        url: `${process.env.STORMGLASS_PATH}`,
        method: 'get',
        headers:{
            'Authorization': `${process.env.STORM_GLASS_API_key}`
        },
        params:{
            lat,
            lng: lon,
            params: 'airTemperature,pressure,currentSpeed,cloudCover',
            start: date,
            end:new Date(date).getTime()+7*1000*60*60
        }
    })
    console.log(request);
    return request.data
}