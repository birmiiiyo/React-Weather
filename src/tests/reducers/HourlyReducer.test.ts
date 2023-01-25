import { setHourlyWeather } from 'store/actionCreators/HourlyWeatherActions'
import { HourlyWeatherReducer } from 'store/reducers/HourlyWeatherReducer'

const state = {
  hours: [],
}

const changeState = [
  {
    hours: [
      {
        airTemperature: {
          dwd: 0.03,
          noaa: 3.05,
          sg: 0.03,
        },
        humidity: {
          dwd: 94.61,
          noaa: 78.97,
          sg: 94.61,
        },
        pressure: {
          dwd: 1039.97,
          noaa: 1039.36,
          sg: 1039.97,
        },
        time: '2023-01-24T11:00:00+00:00' as unknown as Date,
        visibility: {
          noaa: 24.14,
          sg: 24.14,
        },
      },
      {
        airTemperature: {
          dwd: 1.5,
          noaa: 4.1,
          sg: 1.5,
        },
        humidity: {
          dwd: 88.87,
          noaa: 73.8,
          sg: 88.87,
        },
        pressure: {
          dwd: 1039.21,
          noaa: 1039.31,
          sg: 1039.21,
        },
        time: '2023-01-24T12:00:00+00:00' as unknown as Date,
        visibility: {
          noaa: 24.14,
          sg: 24.14,
        },
      },
      {
        airTemperature: {
          dwd: 2.58,
          noaa: 4.44,
          sg: 2.58,
        },
        humidity: {
          dwd: 85.37,
          noaa: 73.4,
          sg: 85.37,
        },
        pressure: {
          dwd: 1038.58,
          noaa: 1038.82,
          sg: 1038.58,
        },
        time: '2023-01-24T13:00:00+00:00' as unknown as Date,
        visibility: {
          noaa: 24.14,
          sg: 24.14,
        },
      },
    ],
    meta: {
      cost: 1,
      dailyQuota: 10,
      end: '2023-01-23 01:09',
      lat: 53.8791993,
      lng: 27.5069047,
      params: ['waveHeight', 'airTemperature'],
      requestCount: 2,
      start: '2023-01-22 23:00',
    },
  },
  {
    hours: [
      {
        airTemperature: {
          dwd: -2.74,
          noaa: 0.96,
          sg: -2.74,
        },
        humidity: {
          dwd: 99.31,
          noaa: 89.3,
          sg: 99.31,
        },
        pressure: {
          dwd: 1040.01,
          noaa: 1039.45,
          sg: 1040.01,
        },
        time: '2023-01-24T09:00:00+00:00' as unknown as Date,
        visibility: {
          noaa: 24.14,
          sg: 24.14,
        },
      },
      {
        airTemperature: {
          dwd: -1.61,
          noaa: 2.01,
          sg: -1.61,
        },
        humidity: {
          dwd: 99.08,
          noaa: 84.13,
          sg: 99.08,
        },
        pressure: {
          dwd: 1040,
          noaa: 1039.4,
          sg: 1040,
        },
        time: '2023-01-24T10:00:00+00:00' as unknown as Date,
        visibility: {
          noaa: 24.14,
          sg: 24.14,
        },
      },
    ],
    meta: {
      cost: 1,
      dailyQuota: 10,
      end: '2023-01-23 01:09',
      lat: 24.8791993,
      lng: 43.5069047,
      params: ['waveHeight', 'airTemperature'],
      requestCount: 3,
      start: '2023-01-22 23:00',
    },
  },
]

describe('hourly-reducer', () => {
  it('test reducer', () => {
    expect(
      HourlyWeatherReducer(
        state,
        setHourlyWeather({ hours: changeState[0].hours }),
      ),
    ).toEqual(changeState[0])
  })

  it('test reducer', () => {
    expect(
      HourlyWeatherReducer(
        state,
        setHourlyWeather({ hours: changeState[1].hours }),
      ),
    ).toEqual(changeState[1])
  })
})
