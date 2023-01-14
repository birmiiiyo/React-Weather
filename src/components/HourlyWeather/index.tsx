import { useAppSelector } from "hooks/useAppSelector"
import React from "react"

export const HourlyWeather = () => {
    const {hours} = useAppSelector(state => state.HourlyWeather)
    return (<div><h1>Hourly</h1>
    <ul>{hours.map(hour=> <li key={hour.time.getDay()}>{hour.airTemperature.noaa}</li>)}</ul></div>)
}