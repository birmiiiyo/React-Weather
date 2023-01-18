import { IStormGlass } from '@interfaces/StormGlass'

export const filterPerFourHour = (hours: IStormGlass[]) => {
  return hours.filter((_hour, i) => {
    if (i === 0) return true
    if (i % 4 === 0) return true
  })
}
