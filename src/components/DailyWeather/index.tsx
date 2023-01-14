import { useAppSelector } from "hooks/useAppSelector"
import React, { useState } from "react"

import {Container,List,Title,Value,Button} from './styles'
export const DayliWeather = () => {
    const [time,setTime] = useState<'day'|'night'>('day')
    const {list} = useAppSelector(state => state.DailyWeaher)
    const switchTime = () => {
        if(time === 'day'){
            setTime('night')
        } else {
            setTime('day')
        }
    }
    return (<Container>
        <Title>daily</Title>
        <Button onClick={switchTime}>{time}</Button>
        <List>
            {list?.map(day => <Value key={day.sunrise}>
                <div>Day: {new Date(day.dt*1000).getDay()}</div>
                <div>temp at {time}: {time === 'day'? day.temp.day.toFixed(1)
                : 
                day.temp.night.toFixed(1)}</div>
                <div>Feels like at {time}: {day.feels_like[time].toFixed(1)}</div>
                <div>{day.weather[0].main}</div>
                <div>Clouds: {day.clouds+'%'}</div>
                <div>Ветер: {day.speed}m/s</div>
            </Value>)}
        </List>
    </Container>)
}