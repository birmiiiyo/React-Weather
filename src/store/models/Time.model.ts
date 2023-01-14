export interface ITimeState {
    countryName:string
    zoneName:string
    abbreviation:string
    time: Date
    gmtOffset:number
}

export enum ETimeActionType {
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  GET_CURRENT_TIME = 'GET_CURRENT_TIME',
}

interface ICurrentTimeGet{
  type: ETimeActionType.GET_CURRENT_TIME
}

interface ICurrentTimeSet{
  type: ETimeActionType.SET_CURRENT_TIME;
  payload: ITimeState;
}


export type TTimeType = ICurrentTimeGet | ICurrentTimeSet;