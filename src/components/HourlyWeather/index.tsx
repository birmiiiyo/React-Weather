import { SelectTime } from "@components/Select"
import { convertDateTimeToHours } from "@components/Time/helpers"
import { useAppSelector } from "hooks/useAppSelector"
import React, { useState } from "react"

import {Container,List,Value} from './styles'

export const HourlyWeather = () => {
    const {hours} = useAppSelector(state => state.hourlyWeather)
    const [activeHours, setActiveHours] = useState(0)
    
    return (
        <Container>
        <SelectTime hours={hours.filter((_hour, i) => {
            if(i===0) return true
            if(i%4 === 0) return true
            })}
            setActiveHours={setActiveHours}
            />
        <List>
            {hours
            .slice(activeHours,activeHours+4)
            .map(hour=> 
            <Value key={hour.humidity.noaa+hour.pressure.noaa}>
                <div>{convertDateTimeToHours(hour.time)}</div>
                <div>temp: {hour.airTemperature.noaa}*C</div>
                <div>pressure: {hour.pressure.noaa}</div>
                <div>visibility: {hour.visibility.noaa}</div>
            </Value>
            )}
    </List>
    </Container>
    )}