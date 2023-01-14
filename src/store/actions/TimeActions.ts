import { ETimeActionType,ITimeState } from "@store/models/Time.model";

export const getCurrentTime = () => ({
    type: ETimeActionType.GET_CURRENT_TIME
})

export const setCurrentTime = (newLocation: ITimeState) => ({
    type: ETimeActionType.SET_CURRENT_TIME, 
    payload: newLocation
    }
)