import { DayliWeather } from "@components/DailyWeather"
import { HourlyWeather } from "@components/HourlyWeather"
import { useAppSelector } from "hooks/useAppSelector"
import React, { Fragment, useState } from "react"

import {Button, Container } from './styles'

type ActiveWeather = 'daily'|'hourly'

export const Information = () => {
    const [activeWeather, setActiveWeather] = useState<ActiveWeather>('daily')
    const switchWeather = () => {
        if (activeWeather === 'daily'){
            setActiveWeather('hourly')
        } else {
            setActiveWeather('daily')
        }
    }
    return (<Container>
        <Button onClick={switchWeather} disabled={activeWeather === 'daily'}>Daily</Button>
        <Button onClick={switchWeather} disabled={activeWeather === 'hourly'}>Hourly</Button>
    {activeWeather === 'daily' ? <DayliWeather/> : <HourlyWeather/>}
    </Container>)
}