import axios from 'axios'

import { MockapiRequest } from 'interfaces/Mockapi'

export const getWeatherImagesAPI = async (type: string) => {
  const request = await axios.get<MockapiRequest>(
    `${process.env.MOCKAPI_API_PATH}/imgs?type=${type}`,
  )
  return request.data
}
