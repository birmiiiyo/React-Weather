import ApiCalendar from 'react-google-calendar-api';

import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';

import { setCalendarEvents,userLogin,userLogout } from '@actions/CalendarActions';

import { IEventsListResponse } from '@interfaces/Calendar';

export const useEvents = () => {
    const dispatch = useAppDispatch();
    const {isLogin}=useAppSelector(state=> state.calendar)

  const setLogin = () => {
    if (!isLogin) {
        ApiCalendar.handleAuthClick().then(() => {
            ApiCalendar.listUpcomingEvents(4)
          .then(({ result }: IEventsListResponse) => {
          dispatch(userLogin());
          dispatch(setCalendarEvents(result.items));
        });
      });
    } else {
        ApiCalendar.handleSignoutClick();
      dispatch(userLogout());
      dispatch(setCalendarEvents([]));
    }
  };

  return [isLogin, setLogin] as const;
};