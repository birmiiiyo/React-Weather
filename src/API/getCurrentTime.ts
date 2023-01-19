import axios from 'axios'

import { IPositionProps } from '@interfaces/LatLonProps'
import { ITime } from '@interfaces/TimeZoneDB'

export const getCurrentTimeFromAPI = async ({ lat, lon }: IPositionProps) => {
  const request = await axios.get<ITime>(
    `${process.env.TIMEZONEDB_PATH}&lat=${lat}&lng=${lon}`
  )
  return request?.data
}
