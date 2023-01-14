import React from "react"

import { apiCalendar } from "utils/Calendar"

export const Calendar = () => {
    async function getEvents() {
      const data = await apiCalendar.listUpcomingEvents(10)
      console.log(data.result);
    }
  return (
    <div>index
      <button onClick={()=>getEvents()}>get events</button>
    </div>
  )
}
