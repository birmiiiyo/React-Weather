import { useAppSelector } from "hooks/useAppSelector"
import React, { Fragment } from "react"

export const Information = () => {
    const {list} = useAppSelector(state => state.DailyWeaher)
    console.log(list);
    
    return (<div>
        <h1>for day</h1>
        {list ? list?.map(day =><Fragment key={day.sunrise}>
            <h1>{day.weather[0].description}</h1>
            <h1>{(day.feels_like.day - 273).toFixed(1)}C</h1>
        </Fragment>) : 'хуйня'}
    </div>)
}