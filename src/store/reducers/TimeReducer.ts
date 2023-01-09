interface TimeState {
    abbreviation: string;
    datetime: Date | null,
    timezone:string,
}

const initialState: TimeState = {
  abbreviation: '',
  datetime: null,
  timezone:'',
};

const TimeReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case 'GET_TIME':
      return { ...action};
    default:
      return state;
  }
};

export default TimeReducer;