import { ILocation } from 'interfaces/OpenWeather.location'

export interface DropdownProps {
  search: string
  cities: Array<ILocation>
  dropdown: boolean
  clickHandler: (lat: number, lon: number) => void
}
