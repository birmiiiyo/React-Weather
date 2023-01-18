export interface ILocationState {
  lat: number
  lon: number
}

export enum ELocationActionType {
  SET_LOCATION = 'SET_LOCATION',
}

export interface ILocationAdd {
  type: ELocationActionType.SET_LOCATION
  payload: ILocationState
}

export type TLocationType = ILocationAdd
