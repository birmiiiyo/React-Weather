import axios from 'axios'

import { getCurrentTimeFromAPI } from '../../API/getCurrentTime'

jest.mock('axios')

describe('Проверка api времени', () => {
  it('Корректный ответ', async () => {
    const data = await getCurrentTimeFromAPI({ lat: 35, lon: 60 })
    expect(axios.get).toBeCalledTimes(1)
    expect(data?.countryName).toBe('Iran')
  })
})
