import type { InferValueTypes } from 'interfaces/ActionCreators'
import * as actions from 'store/actionCreators/TimeActions'

type TimeActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export interface ITimeState {
  countryName: string
  zoneName: string
  abbreviation: string
  time: string
  gmtOffset: number
}

const initialState: ITimeState = {
  countryName: '',
  zoneName: '',
  abbreviation: '',
  time: '',
  gmtOffset: 0,
}

export const TimeReducer = (
  state = initialState,
  action: TimeActionsTypes,
): ITimeState => {
  switch (action.type) {
    case 'SET_CURRENT_TIME':
      return { ...action.payload }
    default:
      return state
  }
}
