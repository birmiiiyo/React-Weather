export interface IStormGlass {
  hours: Hour[]
  meta: Meta
}

export interface Meta {
  cost: number
  dailyQuota: number
  end: string
  lat: number
  lng: number
  params: string[]
  requestCount: number
  start: string
}

export interface Hour {
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
