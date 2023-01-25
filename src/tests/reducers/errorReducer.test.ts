import {
  setErrorAtDailyWeather,
  setErrorAtHourlyWeather,
  setErrorAtLocation,
  setErrorAtTime,
} from 'store/actionCreators/ErrorActions'
import { ErrorReducer } from 'store/reducers/ErrorReducer'

const state = {
  dailyWeatherError: '',
  hourlyWeatherError: '',
  locationError: '',
  timeError: '',
}

const changeState = [
  {
    dailyWeatherError: 'error at daily',
    hourlyWeatherError: '',
    locationError: '',
    timeError: '',
  },
  {
    dailyWeatherError: '',
    hourlyWeatherError: 'error at hourly',
    locationError: '',
    timeError: '',
  },
  {
    dailyWeatherError: '',
    hourlyWeatherError: '',
    locationError: 'error at location',
    timeError: '',
  },
  {
    dailyWeatherError: '',
    hourlyWeatherError: '',
    locationError: '',
    timeError: 'error at time',
  },
]

describe('calendar-reducer', () => {
  it('error at DailyReducer', () => {
    expect(
      ErrorReducer(state, setErrorAtDailyWeather('error at daily')),
    ).toEqual(changeState[0])
  })

  it('error at HourlyReducer', () => {
    expect(
      ErrorReducer(state, setErrorAtHourlyWeather('error at hourly')),
    ).toEqual(changeState[1])
  })

  it('error at LocationReducer', () => {
    expect(
      ErrorReducer(state, setErrorAtLocation('error at location')),
    ).toEqual(changeState[2])
  })

  it('error at TimeReducer', () => {
    expect(ErrorReducer(state, setErrorAtTime('error at time'))).toEqual(
      changeState[3],
    )
  })
})
