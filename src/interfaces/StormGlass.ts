export interface IStormGlass {
  airTemperature: AirTemperature
  humidity: Humidity
  pressure: Pressure
  time: Date
  visibility: Visibility
}
export interface AirTemperature {
  noaa: number
  sg: number
}

export interface Humidity {
  noaa: number
  sg: number
}

export interface Pressure {
  noaa: number
  sg: number
}

export interface Visibility {
  noaa: number
  sg: number
}
