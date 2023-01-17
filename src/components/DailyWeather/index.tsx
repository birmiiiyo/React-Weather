import {  getImage } from "@utils/getIcons"
import { weekDays } from "constants/weekDays"
import { useAppSelector } from "hooks/useAppSelector"
import React, { useState } from "react"
import {Container,List, Value,Button, Icon, Day, Params} from './styles'
export const DailyWeather = () => {
    const [time,setTime] = useState<'day'|'night'>('day')
    const {list} = useAppSelector(state => state.dailyWeather)

    const switchTime = () => {
        if(time === 'day'){
            setTime('night')
        } else {
            setTime('day')
        }
    }
    return (<Container>
        <div>Weather at: <Button onClick={switchTime}>{time}</Button></div>
        <List>
            {list?.map(day => <Value key={day.sunrise}>
                <Day> 
                    {weekDays[new Date(day.dt*1000).getDay()]} 
                    <Icon src={getImage(day.weather[0].main)}/> 
                </Day>
                <Params>
                {time}: {(day.temp[time]-273).toFixed(1) === '-0.0' ? '0.0': (day.temp[time]-273).toFixed(1)}°C
                </Params>
                <Params>
                Feels like: {(day.feels_like[time]-273).toFixed(1)}°C
                </Params>
                <Params>
                Overcast: {day.clouds}%
                </Params>
                <Params>
                Wind speed: {day.speed}m/s
                </Params>
            </Value>)}
        </List>
    </Container>)
}