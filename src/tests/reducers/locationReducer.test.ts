import { setLocation } from 'store/actionCreators/LocationActions'
import { LocationReducer } from 'store/reducers/LocationReducer'

const state = {
  lat: 35.011665,
  lon: 135.768326,
}

const changeState = [
  {
    lat: 32.43324,
    lon: 43.442432,
  },
  {
    lat: 43.42424,
    lon: 35.743426,
  },
]

describe('calendar-reducer', () => {
  it('set location correctly', () => {
    expect(LocationReducer(state, setLocation(changeState[0]))).toEqual({
      lat: 32.43324,
      lon: 43.442432,
    })
  })

  it('set location correctly x2', () => {
    expect(LocationReducer(state, setLocation(changeState[1]))).toEqual({
      lat: 43.42424,
      lon: 35.743426,
    })
  })
})
