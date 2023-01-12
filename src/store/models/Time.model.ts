export interface ITimeState {
    countryName:string
    zoneName:string
    abbreviation:string
    formatted:string
    timestamp:number
}

export enum ETimeActionType {
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  GET_CURRENT_TIME = 'GET_CURRENT_TIME'
}

interface ICurrentTimeGet{
  type: ETimeActionType.GET_CURRENT_TIME
}

interface ICurrentTimeSet{
  type: ETimeActionType.SET_CURRENT_TIME;
  payload: ITimeState;
}

export type TDailyWeatherType = ICurrentTimeGet | ICurrentTimeSet;