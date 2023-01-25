import { Dispatch, SetStateAction } from 'react'

import { Hour } from 'interfaces/StormGlass'

export interface ISelectTimeProps {
  hours: Hour[]
  setActiveHours: Dispatch<SetStateAction<number>>
}
