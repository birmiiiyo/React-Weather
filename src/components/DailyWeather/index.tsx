import { stat } from "fs"
import { useAppSelector } from "hooks/useAppSelector"
import React from "react"

export const DayliWeather = () => {
    const {list} = useAppSelector(state => state.DailyWeaher)
    return (<div>
        <h1>daily</h1>
        <ul>
            {list?.map(day => <li key={day.sunrise}><h1>{day.weather.map(item => <>{item.description + item.id + item.main}</>)}</h1></li>)}
        </ul>
    </div>)
}