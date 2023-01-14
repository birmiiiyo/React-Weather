import { IPositionProps } from '@types/LatLonProps';
import { ITime } from '@types/TimeZoneDB'
import axios from 'axios'

export const getCurrentTimeFromAPI = async ({lat,lon}: IPositionProps)=>{
    const request = await axios.get<ITime>(`${process.env.TIMEZONEDB_PATH}&lat=${lat}&lng=${lon}`)
    return request.data
}