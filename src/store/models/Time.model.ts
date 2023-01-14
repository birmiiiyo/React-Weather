export interface ITimeState {
    countryName:string
    zoneName:string
    abbreviation:string
    time: Date
}

export enum ETimeActionType {
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  GET_CURRENT_TIME = 'GET_CURRENT_TIME',
  INCREASE_MINUTES='INCREASE_MINUTES',
}

interface ICurrentTimeGet{
  type: ETimeActionType.GET_CURRENT_TIME
}

interface ICurrentTimeSet{
  type: ETimeActionType.SET_CURRENT_TIME;
  payload: ITimeState;
}
interface IMinutesIncrease{
  type: ETimeActionType.INCREASE_MINUTES
}

export type TDailyWeatherType = ICurrentTimeGet | ICurrentTimeSet |IMinutesIncrease;