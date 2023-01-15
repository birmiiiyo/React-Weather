export interface ILocationState {
    lat: number;
    lon: number;

}

export enum ELocationActionType {
  ADD_LOCATION = 'ADD_LOCATION'
}

export interface ILocationAdd {
  type: ELocationActionType.ADD_LOCATION;
  payload: ILocationState;
}

export type TLocationType = ILocationAdd;