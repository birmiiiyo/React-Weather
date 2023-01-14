import { useAppSelector } from "hooks/useAppSelector"
import React from "react"

import {Container,List,Title,Value} from './styles'

export const HourlyWeather = () => {
    const {hours} = useAppSelector(state => state.HourlyWeather)
    
    return (<Container>
        <Title>Hourly</Title>
        <List>
            {hours.map(hour=> 
            <Value key={hour.time.toISOString()}>
                <div>{hour.time.getHours()}:00</div>
                <div>{hour.airTemperature.noaa}</div>
            </Value>
            )}
    </List>
    </Container>
    )}