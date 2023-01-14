import { StormGlass } from '@types/StormGlass'
import { IPositionProps } from '@types/LatLonProps';
import axios from 'axios'

export const getHourlyWeatherAPI = async ({lat,lon}: IPositionProps)=>{
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
            start: new Date().getTime(),
            end: new Date().getTime()+5*60*60*1000
        }
    })
    console.log(request);
    return request.data
}