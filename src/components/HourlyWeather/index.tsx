import { useAppSelector } from "hooks/useAppSelector"
import React from "react"

import {Container,List,Title,Value} from './styles'

export const HourlyWeather = () => {

    
    return (<Container>
        <Title>Hourly</Title>
        <List>
            {hours.slice(0,7).map(hour=> 
            <Value key={hour.time.toString()}>
                <div>{hour.time.toString()}:00</div>
                <div>{hour.airTemperature.noaa}</div>
            </Value>
            )}
    </List>
    </Container>
    )}

export const hours =[
    {
        "airTemperature": {
            "noaa": 0.93,
            "sg": 0.93
        },
        "humidity": {
            "noaa": 98.9,
            "sg": 98.9
        },
        "pressure": {
            "noaa": 998.76,
            "sg": 998.76
        },
        "time": "2023-01-17T07:00:00+00:00",
        "visibility": {
            "noaa": 0.05,
            "sg": 0.05
        }
    },
    {
        "airTemperature": {
            "noaa": 1.05,
            "sg": 1.05
        },
        "humidity": {
            "noaa": 99.2,
            "sg": 99.2
        },
        "pressure": {
            "noaa": 998.7,
            "sg": 998.7
        },
        "time": "2023-01-17T08:00:00+00:00",
        "visibility": {
            "noaa": 0.06,
            "sg": 0.06
        }
    },
    {
        "airTemperature": {
            "noaa": 1.18,
            "sg": 1.18
        },
        "humidity": {
            "noaa": 99.5,
            "sg": 99.5
        },
        "pressure": {
            "noaa": 998.64,
            "sg": 998.64
        },
        "time": "2023-01-17T09:00:00+00:00",
        "visibility": {
            "noaa": 0.07,
            "sg": 0.07
        }
    },
    {
        "airTemperature": {
            "noaa": 1.29,
            "sg": 1.29
        },
        "humidity": {
            "noaa": 99.63,
            "sg": 99.63
        },
        "pressure": {
            "noaa": 998.44,
            "sg": 998.44
        },
        "time": "2023-01-17T10:00:00+00:00",
        "visibility": {
            "noaa": 0.25,
            "sg": 0.25
        }
    },
    {
        "airTemperature": {
            "noaa": 1.4,
            "sg": 1.4
        },
        "humidity": {
            "noaa": 99.77,
            "sg": 99.77
        },
        "pressure": {
            "noaa": 998.24,
            "sg": 998.24
        },
        "time": "2023-01-17T11:00:00+00:00",
        "visibility": {
            "noaa": 0.42,
            "sg": 0.42
        }
    },
    {
        "airTemperature": {
            "noaa": 1.51,
            "sg": 1.51
        },
        "humidity": {
            "noaa": 99.9,
            "sg": 99.9
        },
        "pressure": {
            "noaa": 998.04,
            "sg": 998.04
        },
        "time": "2023-01-17T12:00:00+00:00",
        "visibility": {
            "noaa": 0.6,
            "sg": 0.6
        }
    },
    {
        "airTemperature": {
            "noaa": 1.52,
            "sg": 1.52
        },
        "humidity": {
            "noaa": 99.73,
            "sg": 99.73
        },
        "pressure": {
            "noaa": 997.94,
            "sg": 997.94
        },
        "time": "2023-01-17T13:00:00+00:00",
        "visibility": {
            "noaa": 0.57,
            "sg": 0.57
        }
    },
    {
        "airTemperature": {
            "noaa": 1.53,
            "sg": 1.53
        },
        "humidity": {
            "noaa": 99.57,
            "sg": 99.57
        },
        "pressure": {
            "noaa": 997.83,
            "sg": 997.83
        },
        "time": "2023-01-17T14:00:00+00:00",
        "visibility": {
            "noaa": 0.54,
            "sg": 0.54
        }
    },
    {
        "airTemperature": {
            "noaa": 1.54,
            "sg": 1.54
        },
        "humidity": {
            "noaa": 99.4,
            "sg": 99.4
        },
        "pressure": {
            "noaa": 997.72,
            "sg": 997.72
        },
        "time": "2023-01-17T15:00:00+00:00",
        "visibility": {
            "noaa": 0.51,
            "sg": 0.51
        }
    },
    {
        "airTemperature": {
            "noaa": 1.5,
            "sg": 1.5
        },
        "humidity": {
            "noaa": 99.33,
            "sg": 99.33
        },
        "pressure": {
            "noaa": 997.45,
            "sg": 997.45
        },
        "time": "2023-01-17T16:00:00+00:00",
        "visibility": {
            "noaa": 0.35,
            "sg": 0.35
        }
    },
    {
        "airTemperature": {
            "noaa": 1.46,
            "sg": 1.46
        },
        "humidity": {
            "noaa": 99.27,
            "sg": 99.27
        },
        "pressure": {
            "noaa": 997.17,
            "sg": 997.17
        },
        "time": "2023-01-17T17:00:00+00:00",
        "visibility": {
            "noaa": 0.2,
            "sg": 0.2
        }
    },
    {
        "airTemperature": {
            "noaa": 1.43,
            "sg": 1.43
        },
        "humidity": {
            "noaa": 99.2,
            "sg": 99.2
        },
        "pressure": {
            "noaa": 996.89,
            "sg": 996.89
        },
        "time": "2023-01-17T18:00:00+00:00",
        "visibility": {
            "noaa": 0.05,
            "sg": 0.05
        }
    },
    {
        "airTemperature": {
            "noaa": 1.47,
            "sg": 1.47
        },
        "humidity": {
            "noaa": 99.03,
            "sg": 99.03
        },
        "pressure": {
            "noaa": 996.86,
            "sg": 996.86
        },
        "time": "2023-01-17T19:00:00+00:00",
        "visibility": {
            "noaa": 0.05,
            "sg": 0.05
        }
    },
    {
        "airTemperature": {
            "noaa": 1.52,
            "sg": 1.52
        },
        "humidity": {
            "noaa": 98.87,
            "sg": 98.87
        },
        "pressure": {
            "noaa": 996.84,
            "sg": 996.84
        },
        "time": "2023-01-17T20:00:00+00:00",
        "visibility": {
            "noaa": 0.05,
            "sg": 0.05
        }
    },
    {
        "airTemperature": {
            "noaa": 1.56,
            "sg": 1.56
        },
        "humidity": {
            "noaa": 98.7,
            "sg": 98.7
        },
        "pressure": {
            "noaa": 996.81,
            "sg": 996.81
        },
        "time": "2023-01-17T21:00:00+00:00",
        "visibility": {
            "noaa": 0.05,
            "sg": 0.05
        }
    },
    {
        "airTemperature": {
            "noaa": 1.59,
            "sg": 1.59
        },
        "humidity": {
            "noaa": 98.97,
            "sg": 98.97
        },
        "pressure": {
            "noaa": 997.31,
            "sg": 997.31
        },
        "time": "2023-01-17T22:00:00+00:00",
        "visibility": {
            "noaa": 0.13,
            "sg": 0.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.62,
            "sg": 1.62
        },
        "humidity": {
            "noaa": 99.23,
            "sg": 99.23
        },
        "pressure": {
            "noaa": 997.82,
            "sg": 997.82
        },
        "time": "2023-01-17T23:00:00+00:00",
        "visibility": {
            "noaa": 0.2,
            "sg": 0.2
        }
    },
    {
        "airTemperature": {
            "noaa": 1.64,
            "sg": 1.64
        },
        "humidity": {
            "noaa": 99.5,
            "sg": 99.5
        },
        "pressure": {
            "noaa": 998.32,
            "sg": 998.32
        },
        "time": "2023-01-18T00:00:00+00:00",
        "visibility": {
            "noaa": 0.28,
            "sg": 0.28
        }
    },
    {
        "airTemperature": {
            "noaa": 1.54,
            "sg": 1.54
        },
        "humidity": {
            "noaa": 98.37,
            "sg": 98.37
        },
        "pressure": {
            "noaa": 998.76,
            "sg": 998.76
        },
        "time": "2023-01-18T01:00:00+00:00",
        "visibility": {
            "noaa": 8.23,
            "sg": 8.23
        }
    },
    {
        "airTemperature": {
            "noaa": 1.44,
            "sg": 1.44
        },
        "humidity": {
            "noaa": 97.23,
            "sg": 97.23
        },
        "pressure": {
            "noaa": 999.2,
            "sg": 999.2
        },
        "time": "2023-01-18T02:00:00+00:00",
        "visibility": {
            "noaa": 16.18,
            "sg": 16.18
        }
    },
    {
        "airTemperature": {
            "noaa": 1.34,
            "sg": 1.34
        },
        "humidity": {
            "noaa": 96.1,
            "sg": 96.1
        },
        "pressure": {
            "noaa": 999.63,
            "sg": 999.63
        },
        "time": "2023-01-18T03:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.18,
            "sg": 1.18
        },
        "humidity": {
            "noaa": 95.6,
            "sg": 95.6
        },
        "pressure": {
            "noaa": 999.68,
            "sg": 999.68
        },
        "time": "2023-01-18T04:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.02,
            "sg": 1.02
        },
        "humidity": {
            "noaa": 95.1,
            "sg": 95.1
        },
        "pressure": {
            "noaa": 999.72,
            "sg": 999.72
        },
        "time": "2023-01-18T05:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.86,
            "sg": 0.86
        },
        "humidity": {
            "noaa": 94.6,
            "sg": 94.6
        },
        "pressure": {
            "noaa": 999.77,
            "sg": 999.77
        },
        "time": "2023-01-18T06:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.18,
            "sg": 1.18
        },
        "humidity": {
            "noaa": 96.07,
            "sg": 96.07
        },
        "pressure": {
            "noaa": 998.88,
            "sg": 998.88
        },
        "time": "2023-01-18T07:00:00+00:00",
        "visibility": {
            "noaa": 16.13,
            "sg": 16.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.5,
            "sg": 1.5
        },
        "humidity": {
            "noaa": 97.53,
            "sg": 97.53
        },
        "pressure": {
            "noaa": 997.99,
            "sg": 997.99
        },
        "time": "2023-01-18T08:00:00+00:00",
        "visibility": {
            "noaa": 8.13,
            "sg": 8.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.83,
            "sg": 1.83
        },
        "humidity": {
            "noaa": 99,
            "sg": 99
        },
        "pressure": {
            "noaa": 997.11,
            "sg": 997.11
        },
        "time": "2023-01-18T09:00:00+00:00",
        "visibility": {
            "noaa": 0.12,
            "sg": 0.12
        }
    },
    {
        "airTemperature": {
            "noaa": 2.15,
            "sg": 2.15
        },
        "humidity": {
            "noaa": 98.93,
            "sg": 98.93
        },
        "pressure": {
            "noaa": 996.47,
            "sg": 996.47
        },
        "time": "2023-01-18T10:00:00+00:00",
        "visibility": {
            "noaa": 0.16,
            "sg": 0.16
        }
    },
    {
        "airTemperature": {
            "noaa": 2.47,
            "sg": 2.47
        },
        "humidity": {
            "noaa": 98.87,
            "sg": 98.87
        },
        "pressure": {
            "noaa": 995.84,
            "sg": 995.84
        },
        "time": "2023-01-18T11:00:00+00:00",
        "visibility": {
            "noaa": 0.2,
            "sg": 0.2
        }
    },
    {
        "airTemperature": {
            "noaa": 2.79,
            "sg": 2.79
        },
        "humidity": {
            "noaa": 98.8,
            "sg": 98.8
        },
        "pressure": {
            "noaa": 995.2,
            "sg": 995.2
        },
        "time": "2023-01-18T12:00:00+00:00",
        "visibility": {
            "noaa": 0.23,
            "sg": 0.23
        }
    },
    {
        "airTemperature": {
            "noaa": 3.03,
            "sg": 3.03
        },
        "humidity": {
            "noaa": 98.67,
            "sg": 98.67
        },
        "pressure": {
            "noaa": 995.35,
            "sg": 995.35
        },
        "time": "2023-01-18T13:00:00+00:00",
        "visibility": {
            "noaa": 0.24,
            "sg": 0.24
        }
    },
    {
        "airTemperature": {
            "noaa": 3.26,
            "sg": 3.26
        },
        "humidity": {
            "noaa": 98.53,
            "sg": 98.53
        },
        "pressure": {
            "noaa": 995.51,
            "sg": 995.51
        },
        "time": "2023-01-18T14:00:00+00:00",
        "visibility": {
            "noaa": 0.25,
            "sg": 0.25
        }
    },
    {
        "airTemperature": {
            "noaa": 3.49,
            "sg": 3.49
        },
        "humidity": {
            "noaa": 98.4,
            "sg": 98.4
        },
        "pressure": {
            "noaa": 995.66,
            "sg": 995.66
        },
        "time": "2023-01-18T15:00:00+00:00",
        "visibility": {
            "noaa": 0.26,
            "sg": 0.26
        }
    },
    {
        "airTemperature": {
            "noaa": 3.66,
            "sg": 3.66
        },
        "humidity": {
            "noaa": 97.9,
            "sg": 97.9
        },
        "pressure": {
            "noaa": 995.98,
            "sg": 995.98
        },
        "time": "2023-01-18T16:00:00+00:00",
        "visibility": {
            "noaa": 4.88,
            "sg": 4.88
        }
    },
    {
        "airTemperature": {
            "noaa": 3.82,
            "sg": 3.82
        },
        "humidity": {
            "noaa": 97.4,
            "sg": 97.4
        },
        "pressure": {
            "noaa": 996.3,
            "sg": 996.3
        },
        "time": "2023-01-18T17:00:00+00:00",
        "visibility": {
            "noaa": 9.49,
            "sg": 9.49
        }
    },
    {
        "airTemperature": {
            "noaa": 3.99,
            "sg": 3.99
        },
        "humidity": {
            "noaa": 96.9,
            "sg": 96.9
        },
        "pressure": {
            "noaa": 996.62,
            "sg": 996.62
        },
        "time": "2023-01-18T18:00:00+00:00",
        "visibility": {
            "noaa": 14.1,
            "sg": 14.1
        }
    },
    {
        "airTemperature": {
            "noaa": 3.92,
            "sg": 3.92
        },
        "humidity": {
            "noaa": 96.2,
            "sg": 96.2
        },
        "pressure": {
            "noaa": 997.23,
            "sg": 997.23
        },
        "time": "2023-01-18T19:00:00+00:00",
        "visibility": {
            "noaa": 17.45,
            "sg": 17.45
        }
    },
    {
        "airTemperature": {
            "noaa": 3.84,
            "sg": 3.84
        },
        "humidity": {
            "noaa": 95.5,
            "sg": 95.5
        },
        "pressure": {
            "noaa": 997.84,
            "sg": 997.84
        },
        "time": "2023-01-18T20:00:00+00:00",
        "visibility": {
            "noaa": 20.79,
            "sg": 20.79
        }
    },
    {
        "airTemperature": {
            "noaa": 3.77,
            "sg": 3.77
        },
        "humidity": {
            "noaa": 94.8,
            "sg": 94.8
        },
        "pressure": {
            "noaa": 998.45,
            "sg": 998.45
        },
        "time": "2023-01-18T21:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 3.8,
            "sg": 3.8
        },
        "humidity": {
            "noaa": 92.4,
            "sg": 92.4
        },
        "pressure": {
            "noaa": 999.05,
            "sg": 999.05
        },
        "time": "2023-01-18T22:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 3.82,
            "sg": 3.82
        },
        "humidity": {
            "noaa": 90,
            "sg": 90
        },
        "pressure": {
            "noaa": 999.65,
            "sg": 999.65
        },
        "time": "2023-01-18T23:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 3.84,
            "sg": 3.84
        },
        "humidity": {
            "noaa": 87.6,
            "sg": 87.6
        },
        "pressure": {
            "noaa": 1000.25,
            "sg": 1000.25
        },
        "time": "2023-01-19T00:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 2.81,
            "sg": 2.81
        },
        "humidity": {
            "noaa": 85.5,
            "sg": 85.5
        },
        "pressure": {
            "noaa": 1001.59,
            "sg": 1001.59
        },
        "time": "2023-01-19T01:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.78,
            "sg": 1.78
        },
        "humidity": {
            "noaa": 83.4,
            "sg": 83.4
        },
        "pressure": {
            "noaa": 1002.93,
            "sg": 1002.93
        },
        "time": "2023-01-19T02:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 0.75,
            "sg": 0.75
        },
        "humidity": {
            "noaa": 81.3,
            "sg": 81.3
        },
        "pressure": {
            "noaa": 1004.27,
            "sg": 1004.27
        },
        "time": "2023-01-19T03:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.83,
            "sg": 0.83
        },
        "humidity": {
            "noaa": 82.5,
            "sg": 82.5
        },
        "pressure": {
            "noaa": 1005.25,
            "sg": 1005.25
        },
        "time": "2023-01-19T04:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.91,
            "sg": 0.91
        },
        "humidity": {
            "noaa": 83.7,
            "sg": 83.7
        },
        "pressure": {
            "noaa": 1006.23,
            "sg": 1006.23
        },
        "time": "2023-01-19T05:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.99,
            "sg": 0.99
        },
        "humidity": {
            "noaa": 84.9,
            "sg": 84.9
        },
        "pressure": {
            "noaa": 1007.22,
            "sg": 1007.22
        },
        "time": "2023-01-19T06:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.95,
            "sg": 0.95
        },
        "humidity": {
            "noaa": 86.3,
            "sg": 86.3
        },
        "pressure": {
            "noaa": 1008.03,
            "sg": 1008.03
        },
        "time": "2023-01-19T07:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.91,
            "sg": 0.91
        },
        "humidity": {
            "noaa": 87.7,
            "sg": 87.7
        },
        "pressure": {
            "noaa": 1008.85,
            "sg": 1008.85
        },
        "time": "2023-01-19T08:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.88,
            "sg": 0.88
        },
        "humidity": {
            "noaa": 89.1,
            "sg": 89.1
        },
        "pressure": {
            "noaa": 1009.66,
            "sg": 1009.66
        },
        "time": "2023-01-19T09:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1,
            "sg": 1
        },
        "humidity": {
            "noaa": 88.77,
            "sg": 88.77
        },
        "pressure": {
            "noaa": 1009.56,
            "sg": 1009.56
        },
        "time": "2023-01-19T10:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.12,
            "sg": 1.12
        },
        "humidity": {
            "noaa": 88.43,
            "sg": 88.43
        },
        "pressure": {
            "noaa": 1009.45,
            "sg": 1009.45
        },
        "time": "2023-01-19T11:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.24,
            "sg": 1.24
        },
        "humidity": {
            "noaa": 88.1,
            "sg": 88.1
        },
        "pressure": {
            "noaa": 1009.35,
            "sg": 1009.35
        },
        "time": "2023-01-19T12:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.91,
            "sg": 0.91
        },
        "humidity": {
            "noaa": 89.3,
            "sg": 89.3
        },
        "pressure": {
            "noaa": 1009.67,
            "sg": 1009.67
        },
        "time": "2023-01-19T13:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.58,
            "sg": 0.58
        },
        "humidity": {
            "noaa": 90.5,
            "sg": 90.5
        },
        "pressure": {
            "noaa": 1010,
            "sg": 1010
        },
        "time": "2023-01-19T14:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.25,
            "sg": 0.25
        },
        "humidity": {
            "noaa": 91.7,
            "sg": 91.7
        },
        "pressure": {
            "noaa": 1010.33,
            "sg": 1010.33
        },
        "time": "2023-01-19T15:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.14,
            "sg": 0.14
        },
        "humidity": {
            "noaa": 92.67,
            "sg": 92.67
        },
        "pressure": {
            "noaa": 1010.37,
            "sg": 1010.37
        },
        "time": "2023-01-19T16:00:00+00:00",
        "visibility": {
            "noaa": 17.67,
            "sg": 17.67
        }
    },
    {
        "airTemperature": {
            "noaa": 0.03,
            "sg": 0.03
        },
        "humidity": {
            "noaa": 93.63,
            "sg": 93.63
        },
        "pressure": {
            "noaa": 1010.41,
            "sg": 1010.41
        },
        "time": "2023-01-19T17:00:00+00:00",
        "visibility": {
            "noaa": 11.21,
            "sg": 11.21
        }
    },
    {
        "airTemperature": {
            "noaa": -0.08,
            "sg": -0.08
        },
        "humidity": {
            "noaa": 94.6,
            "sg": 94.6
        },
        "pressure": {
            "noaa": 1010.45,
            "sg": 1010.45
        },
        "time": "2023-01-19T18:00:00+00:00",
        "visibility": {
            "noaa": 4.75,
            "sg": 4.75
        }
    },
    {
        "airTemperature": {
            "noaa": -0.05,
            "sg": -0.05
        },
        "humidity": {
            "noaa": 95.77,
            "sg": 95.77
        },
        "pressure": {
            "noaa": 1010.47,
            "sg": 1010.47
        },
        "time": "2023-01-19T19:00:00+00:00",
        "visibility": {
            "noaa": 3.22,
            "sg": 3.22
        }
    },
    {
        "airTemperature": {
            "noaa": -0.02,
            "sg": -0.02
        },
        "humidity": {
            "noaa": 96.93,
            "sg": 96.93
        },
        "pressure": {
            "noaa": 1010.49,
            "sg": 1010.49
        },
        "time": "2023-01-19T20:00:00+00:00",
        "visibility": {
            "noaa": 1.7,
            "sg": 1.7
        }
    },
    {
        "airTemperature": {
            "noaa": 0.01,
            "sg": 0.01
        },
        "humidity": {
            "noaa": 98.1,
            "sg": 98.1
        },
        "pressure": {
            "noaa": 1010.5,
            "sg": 1010.5
        },
        "time": "2023-01-19T21:00:00+00:00",
        "visibility": {
            "noaa": 0.17,
            "sg": 0.17
        }
    },
    {
        "airTemperature": {
            "noaa": 0.04,
            "sg": 0.04
        },
        "humidity": {
            "noaa": 97.53,
            "sg": 97.53
        },
        "pressure": {
            "noaa": 1010.51,
            "sg": 1010.51
        },
        "time": "2023-01-19T22:00:00+00:00",
        "visibility": {
            "noaa": 2.83,
            "sg": 2.83
        }
    },
    {
        "airTemperature": {
            "noaa": 0.06,
            "sg": 0.06
        },
        "humidity": {
            "noaa": 96.97,
            "sg": 96.97
        },
        "pressure": {
            "noaa": 1010.51,
            "sg": 1010.51
        },
        "time": "2023-01-19T23:00:00+00:00",
        "visibility": {
            "noaa": 5.49,
            "sg": 5.49
        }
    },
    {
        "airTemperature": {
            "noaa": 0.08,
            "sg": 0.08
        },
        "humidity": {
            "noaa": 96.4,
            "sg": 96.4
        },
        "pressure": {
            "noaa": 1010.51,
            "sg": 1010.51
        },
        "time": "2023-01-20T00:00:00+00:00",
        "visibility": {
            "noaa": 8.16,
            "sg": 8.16
        }
    },
    {
        "airTemperature": {
            "noaa": 0.06,
            "sg": 0.06
        },
        "humidity": {
            "noaa": 97.1,
            "sg": 97.1
        },
        "pressure": {
            "noaa": 1010.6,
            "sg": 1010.6
        },
        "time": "2023-01-20T01:00:00+00:00",
        "visibility": {
            "noaa": 5.53,
            "sg": 5.53
        }
    },
    {
        "airTemperature": {
            "noaa": 0.03,
            "sg": 0.03
        },
        "humidity": {
            "noaa": 97.8,
            "sg": 97.8
        },
        "pressure": {
            "noaa": 1010.69,
            "sg": 1010.69
        },
        "time": "2023-01-20T02:00:00+00:00",
        "visibility": {
            "noaa": 2.9,
            "sg": 2.9
        }
    },
    {
        "airTemperature": {
            "noaa": 0.01,
            "sg": 0.01
        },
        "humidity": {
            "noaa": 98.5,
            "sg": 98.5
        },
        "pressure": {
            "noaa": 1010.78,
            "sg": 1010.78
        },
        "time": "2023-01-20T03:00:00+00:00",
        "visibility": {
            "noaa": 0.27,
            "sg": 0.27
        }
    },
    {
        "airTemperature": {
            "noaa": 0.02,
            "sg": 0.02
        },
        "humidity": {
            "noaa": 98.07,
            "sg": 98.07
        },
        "pressure": {
            "noaa": 1011.33,
            "sg": 1011.33
        },
        "time": "2023-01-20T04:00:00+00:00",
        "visibility": {
            "noaa": 4.61,
            "sg": 4.61
        }
    },
    {
        "airTemperature": {
            "noaa": 0.04,
            "sg": 0.04
        },
        "humidity": {
            "noaa": 97.63,
            "sg": 97.63
        },
        "pressure": {
            "noaa": 1011.87,
            "sg": 1011.87
        },
        "time": "2023-01-20T05:00:00+00:00",
        "visibility": {
            "noaa": 8.96,
            "sg": 8.96
        }
    },
    {
        "airTemperature": {
            "noaa": 0.05,
            "sg": 0.05
        },
        "humidity": {
            "noaa": 97.2,
            "sg": 97.2
        },
        "pressure": {
            "noaa": 1012.42,
            "sg": 1012.42
        },
        "time": "2023-01-20T06:00:00+00:00",
        "visibility": {
            "noaa": 13.3,
            "sg": 13.3
        }
    },
    {
        "airTemperature": {
            "noaa": 0.18,
            "sg": 0.18
        },
        "humidity": {
            "noaa": 97.27,
            "sg": 97.27
        },
        "pressure": {
            "noaa": 1012.88,
            "sg": 1012.88
        },
        "time": "2023-01-20T07:00:00+00:00",
        "visibility": {
            "noaa": 14.44,
            "sg": 14.44
        }
    },
    {
        "airTemperature": {
            "noaa": 0.31,
            "sg": 0.31
        },
        "humidity": {
            "noaa": 97.33,
            "sg": 97.33
        },
        "pressure": {
            "noaa": 1013.33,
            "sg": 1013.33
        },
        "time": "2023-01-20T08:00:00+00:00",
        "visibility": {
            "noaa": 15.59,
            "sg": 15.59
        }
    },
    {
        "airTemperature": {
            "noaa": 0.43,
            "sg": 0.43
        },
        "humidity": {
            "noaa": 97.4,
            "sg": 97.4
        },
        "pressure": {
            "noaa": 1013.79,
            "sg": 1013.79
        },
        "time": "2023-01-20T09:00:00+00:00",
        "visibility": {
            "noaa": 16.73,
            "sg": 16.73
        }
    },
    {
        "airTemperature": {
            "noaa": 0.5,
            "sg": 0.5
        },
        "humidity": {
            "noaa": 97.8,
            "sg": 97.8
        },
        "pressure": {
            "noaa": 1014.02,
            "sg": 1014.02
        },
        "time": "2023-01-20T10:00:00+00:00",
        "visibility": {
            "noaa": 12.13,
            "sg": 12.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.57,
            "sg": 0.57
        },
        "humidity": {
            "noaa": 98.2,
            "sg": 98.2
        },
        "pressure": {
            "noaa": 1014.25,
            "sg": 1014.25
        },
        "time": "2023-01-20T11:00:00+00:00",
        "visibility": {
            "noaa": 7.53,
            "sg": 7.53
        }
    },
    {
        "airTemperature": {
            "noaa": 0.64,
            "sg": 0.64
        },
        "humidity": {
            "noaa": 98.6,
            "sg": 98.6
        },
        "pressure": {
            "noaa": 1014.48,
            "sg": 1014.48
        },
        "time": "2023-01-20T12:00:00+00:00",
        "visibility": {
            "noaa": 2.92,
            "sg": 2.92
        }
    },
    {
        "airTemperature": {
            "noaa": 0.55,
            "sg": 0.55
        },
        "humidity": {
            "noaa": 98.73,
            "sg": 98.73
        },
        "pressure": {
            "noaa": 1014.76,
            "sg": 1014.76
        },
        "time": "2023-01-20T13:00:00+00:00",
        "visibility": {
            "noaa": 2.01,
            "sg": 2.01
        }
    },
    {
        "airTemperature": {
            "noaa": 0.46,
            "sg": 0.46
        },
        "humidity": {
            "noaa": 98.87,
            "sg": 98.87
        },
        "pressure": {
            "noaa": 1015.04,
            "sg": 1015.04
        },
        "time": "2023-01-20T14:00:00+00:00",
        "visibility": {
            "noaa": 1.09,
            "sg": 1.09
        }
    },
    {
        "airTemperature": {
            "noaa": 0.37,
            "sg": 0.37
        },
        "humidity": {
            "noaa": 99,
            "sg": 99
        },
        "pressure": {
            "noaa": 1015.32,
            "sg": 1015.32
        },
        "time": "2023-01-20T15:00:00+00:00",
        "visibility": {
            "noaa": 0.17,
            "sg": 0.17
        }
    },
    {
        "airTemperature": {
            "noaa": 0.49,
            "sg": 0.49
        },
        "humidity": {
            "noaa": 98.77,
            "sg": 98.77
        },
        "pressure": {
            "noaa": 1015.26,
            "sg": 1015.26
        },
        "time": "2023-01-20T16:00:00+00:00",
        "visibility": {
            "noaa": 0.19,
            "sg": 0.19
        }
    },
    {
        "airTemperature": {
            "noaa": 0.62,
            "sg": 0.62
        },
        "humidity": {
            "noaa": 98.53,
            "sg": 98.53
        },
        "pressure": {
            "noaa": 1015.2,
            "sg": 1015.2
        },
        "time": "2023-01-20T17:00:00+00:00",
        "visibility": {
            "noaa": 0.22,
            "sg": 0.22
        }
    },
    {
        "airTemperature": {
            "noaa": 0.75,
            "sg": 0.75
        },
        "humidity": {
            "noaa": 98.3,
            "sg": 98.3
        },
        "pressure": {
            "noaa": 1015.14,
            "sg": 1015.14
        },
        "time": "2023-01-20T18:00:00+00:00",
        "visibility": {
            "noaa": 0.24,
            "sg": 0.24
        }
    },
    {
        "airTemperature": {
            "noaa": 0.76,
            "sg": 0.76
        },
        "humidity": {
            "noaa": 98.27,
            "sg": 98.27
        },
        "pressure": {
            "noaa": 1015.24,
            "sg": 1015.24
        },
        "time": "2023-01-20T19:00:00+00:00",
        "visibility": {
            "noaa": 0.22,
            "sg": 0.22
        }
    },
    {
        "airTemperature": {
            "noaa": 0.76,
            "sg": 0.76
        },
        "humidity": {
            "noaa": 98.23,
            "sg": 98.23
        },
        "pressure": {
            "noaa": 1015.34,
            "sg": 1015.34
        },
        "time": "2023-01-20T20:00:00+00:00",
        "visibility": {
            "noaa": 0.19,
            "sg": 0.19
        }
    },
    {
        "airTemperature": {
            "noaa": 0.77,
            "sg": 0.77
        },
        "humidity": {
            "noaa": 98.2,
            "sg": 98.2
        },
        "pressure": {
            "noaa": 1015.43,
            "sg": 1015.43
        },
        "time": "2023-01-20T21:00:00+00:00",
        "visibility": {
            "noaa": 0.17,
            "sg": 0.17
        }
    },
    {
        "airTemperature": {
            "noaa": 0.84,
            "sg": 0.84
        },
        "humidity": {
            "noaa": 98.33,
            "sg": 98.33
        },
        "pressure": {
            "noaa": 1015.3,
            "sg": 1015.3
        },
        "time": "2023-01-20T22:00:00+00:00",
        "visibility": {
            "noaa": 0.14,
            "sg": 0.14
        }
    },
    {
        "airTemperature": {
            "noaa": 0.91,
            "sg": 0.91
        },
        "humidity": {
            "noaa": 98.47,
            "sg": 98.47
        },
        "pressure": {
            "noaa": 1015.17,
            "sg": 1015.17
        },
        "time": "2023-01-20T23:00:00+00:00",
        "visibility": {
            "noaa": 0.11,
            "sg": 0.11
        }
    },
    {
        "airTemperature": {
            "noaa": 0.97,
            "sg": 0.97
        },
        "humidity": {
            "noaa": 98.6,
            "sg": 98.6
        },
        "pressure": {
            "noaa": 1015.05,
            "sg": 1015.05
        },
        "time": "2023-01-21T00:00:00+00:00",
        "visibility": {
            "noaa": 0.08,
            "sg": 0.08
        }
    },
    {
        "airTemperature": {
            "noaa": 1.22,
            "sg": 1.22
        },
        "humidity": {
            "noaa": 98.63,
            "sg": 98.63
        },
        "pressure": {
            "noaa": 1014.95,
            "sg": 1014.95
        },
        "time": "2023-01-21T01:00:00+00:00",
        "visibility": {
            "noaa": 0.23,
            "sg": 0.23
        }
    },
    {
        "airTemperature": {
            "noaa": 1.47,
            "sg": 1.47
        },
        "humidity": {
            "noaa": 98.67,
            "sg": 98.67
        },
        "pressure": {
            "noaa": 1014.86,
            "sg": 1014.86
        },
        "time": "2023-01-21T02:00:00+00:00",
        "visibility": {
            "noaa": 0.37,
            "sg": 0.37
        }
    },
    {
        "airTemperature": {
            "noaa": 1.72,
            "sg": 1.72
        },
        "humidity": {
            "noaa": 98.7,
            "sg": 98.7
        },
        "pressure": {
            "noaa": 1014.77,
            "sg": 1014.77
        },
        "time": "2023-01-21T03:00:00+00:00",
        "visibility": {
            "noaa": 0.52,
            "sg": 0.52
        }
    },
    {
        "airTemperature": {
            "noaa": 1.53,
            "sg": 1.53
        },
        "humidity": {
            "noaa": 97.3,
            "sg": 97.3
        },
        "pressure": {
            "noaa": 1014.92,
            "sg": 1014.92
        },
        "time": "2023-01-21T04:00:00+00:00",
        "visibility": {
            "noaa": 8.39,
            "sg": 8.39
        }
    },
    {
        "airTemperature": {
            "noaa": 1.34,
            "sg": 1.34
        },
        "humidity": {
            "noaa": 95.9,
            "sg": 95.9
        },
        "pressure": {
            "noaa": 1015.06,
            "sg": 1015.06
        },
        "time": "2023-01-21T05:00:00+00:00",
        "visibility": {
            "noaa": 16.26,
            "sg": 16.26
        }
    },
    {
        "airTemperature": {
            "noaa": 1.15,
            "sg": 1.15
        },
        "humidity": {
            "noaa": 94.5,
            "sg": 94.5
        },
        "pressure": {
            "noaa": 1015.21,
            "sg": 1015.21
        },
        "time": "2023-01-21T06:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.21,
            "sg": 1.21
        },
        "humidity": {
            "noaa": 93.5,
            "sg": 93.5
        },
        "pressure": {
            "noaa": 1015.39,
            "sg": 1015.39
        },
        "time": "2023-01-21T07:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.28,
            "sg": 1.28
        },
        "humidity": {
            "noaa": 92.5,
            "sg": 92.5
        },
        "pressure": {
            "noaa": 1015.58,
            "sg": 1015.58
        },
        "time": "2023-01-21T08:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.35,
            "sg": 1.35
        },
        "humidity": {
            "noaa": 91.5,
            "sg": 91.5
        },
        "pressure": {
            "noaa": 1015.76,
            "sg": 1015.76
        },
        "time": "2023-01-21T09:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 1.41,
            "sg": 1.41
        },
        "humidity": {
            "noaa": 89.9,
            "sg": 89.9
        },
        "pressure": {
            "noaa": 1015.6,
            "sg": 1015.6
        },
        "time": "2023-01-21T10:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.47,
            "sg": 1.47
        },
        "humidity": {
            "noaa": 88.3,
            "sg": 88.3
        },
        "pressure": {
            "noaa": 1015.44,
            "sg": 1015.44
        },
        "time": "2023-01-21T11:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.52,
            "sg": 1.52
        },
        "humidity": {
            "noaa": 86.7,
            "sg": 86.7
        },
        "pressure": {
            "noaa": 1015.28,
            "sg": 1015.28
        },
        "time": "2023-01-21T12:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 1.19,
            "sg": 1.19
        },
        "humidity": {
            "noaa": 86.6,
            "sg": 86.6
        },
        "pressure": {
            "noaa": 1015.58,
            "sg": 1015.58
        },
        "time": "2023-01-21T13:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.86,
            "sg": 0.86
        },
        "humidity": {
            "noaa": 86.5,
            "sg": 86.5
        },
        "pressure": {
            "noaa": 1015.87,
            "sg": 1015.87
        },
        "time": "2023-01-21T14:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 0.52,
            "sg": 0.52
        },
        "humidity": {
            "noaa": 86.4,
            "sg": 86.4
        },
        "pressure": {
            "noaa": 1016.16,
            "sg": 1016.16
        },
        "time": "2023-01-21T15:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 0.33,
            "sg": 0.33
        },
        "humidity": {
            "noaa": 88.2,
            "sg": 88.2
        },
        "pressure": {
            "noaa": 1016.38,
            "sg": 1016.38
        },
        "time": "2023-01-21T16:00:00+00:00",
        "visibility": {
            "noaa": 17.39,
            "sg": 17.39
        }
    },
    {
        "airTemperature": {
            "noaa": 0.14,
            "sg": 0.14
        },
        "humidity": {
            "noaa": 90,
            "sg": 90
        },
        "pressure": {
            "noaa": 1016.6,
            "sg": 1016.6
        },
        "time": "2023-01-21T17:00:00+00:00",
        "visibility": {
            "noaa": 10.64,
            "sg": 10.64
        }
    },
    {
        "airTemperature": {
            "noaa": -0.05,
            "sg": -0.05
        },
        "humidity": {
            "noaa": 91.8,
            "sg": 91.8
        },
        "pressure": {
            "noaa": 1016.82,
            "sg": 1016.82
        },
        "time": "2023-01-21T18:00:00+00:00",
        "visibility": {
            "noaa": 3.89,
            "sg": 3.89
        }
    },
    {
        "airTemperature": {
            "noaa": 0.17,
            "sg": 0.17
        },
        "humidity": {
            "noaa": 93.73,
            "sg": 93.73
        },
        "pressure": {
            "noaa": 1017.72,
            "sg": 1017.72
        },
        "time": "2023-01-21T19:00:00+00:00",
        "visibility": {
            "noaa": 2.69,
            "sg": 2.69
        }
    },
    {
        "airTemperature": {
            "noaa": 0.4,
            "sg": 0.4
        },
        "humidity": {
            "noaa": 95.67,
            "sg": 95.67
        },
        "pressure": {
            "noaa": 1018.61,
            "sg": 1018.61
        },
        "time": "2023-01-21T20:00:00+00:00",
        "visibility": {
            "noaa": 1.48,
            "sg": 1.48
        }
    },
    {
        "airTemperature": {
            "noaa": 0.62,
            "sg": 0.62
        },
        "humidity": {
            "noaa": 97.6,
            "sg": 97.6
        },
        "pressure": {
            "noaa": 1019.5,
            "sg": 1019.5
        },
        "time": "2023-01-21T21:00:00+00:00",
        "visibility": {
            "noaa": 0.27,
            "sg": 0.27
        }
    },
    {
        "airTemperature": {
            "noaa": -0.05,
            "sg": -0.05
        },
        "humidity": {
            "noaa": 95.17,
            "sg": 95.17
        },
        "pressure": {
            "noaa": 1020.5,
            "sg": 1020.5
        },
        "time": "2023-01-21T22:00:00+00:00",
        "visibility": {
            "noaa": 8.23,
            "sg": 8.23
        }
    },
    {
        "airTemperature": {
            "noaa": -0.73,
            "sg": -0.73
        },
        "humidity": {
            "noaa": 92.73,
            "sg": 92.73
        },
        "pressure": {
            "noaa": 1021.5,
            "sg": 1021.5
        },
        "time": "2023-01-21T23:00:00+00:00",
        "visibility": {
            "noaa": 16.18,
            "sg": 16.18
        }
    },
    {
        "airTemperature": {
            "noaa": -1.4,
            "sg": -1.4
        },
        "humidity": {
            "noaa": 90.3,
            "sg": 90.3
        },
        "pressure": {
            "noaa": 1022.5,
            "sg": 1022.5
        },
        "time": "2023-01-22T00:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -1.31,
            "sg": -1.31
        },
        "humidity": {
            "noaa": 89.23,
            "sg": 89.23
        },
        "pressure": {
            "noaa": 1022.94,
            "sg": 1022.94
        },
        "time": "2023-01-22T01:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.22,
            "sg": -1.22
        },
        "humidity": {
            "noaa": 88.17,
            "sg": 88.17
        },
        "pressure": {
            "noaa": 1023.38,
            "sg": 1023.38
        },
        "time": "2023-01-22T02:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.12,
            "sg": -1.12
        },
        "humidity": {
            "noaa": 87.1,
            "sg": 87.1
        },
        "pressure": {
            "noaa": 1023.83,
            "sg": 1023.83
        },
        "time": "2023-01-22T03:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -0.69,
            "sg": -0.69
        },
        "humidity": {
            "noaa": 87,
            "sg": 87
        },
        "pressure": {
            "noaa": 1023.94,
            "sg": 1023.94
        },
        "time": "2023-01-22T04:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -0.26,
            "sg": -0.26
        },
        "humidity": {
            "noaa": 86.9,
            "sg": 86.9
        },
        "pressure": {
            "noaa": 1024.05,
            "sg": 1024.05
        },
        "time": "2023-01-22T05:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": 0.18,
            "sg": 0.18
        },
        "humidity": {
            "noaa": 86.8,
            "sg": 86.8
        },
        "pressure": {
            "noaa": 1024.16,
            "sg": 1024.16
        },
        "time": "2023-01-22T06:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.63,
            "sg": 0.63
        },
        "humidity": {
            "noaa": 90.37,
            "sg": 90.37
        },
        "pressure": {
            "noaa": 1024.31,
            "sg": 1024.31
        },
        "time": "2023-01-22T07:00:00+00:00",
        "visibility": {
            "noaa": 16.11,
            "sg": 16.11
        }
    },
    {
        "airTemperature": {
            "noaa": 1.09,
            "sg": 1.09
        },
        "humidity": {
            "noaa": 93.93,
            "sg": 93.93
        },
        "pressure": {
            "noaa": 1024.46,
            "sg": 1024.46
        },
        "time": "2023-01-22T08:00:00+00:00",
        "visibility": {
            "noaa": 8.09,
            "sg": 8.09
        }
    },
    {
        "airTemperature": {
            "noaa": 1.54,
            "sg": 1.54
        },
        "humidity": {
            "noaa": 97.5,
            "sg": 97.5
        },
        "pressure": {
            "noaa": 1024.6,
            "sg": 1024.6
        },
        "time": "2023-01-22T09:00:00+00:00",
        "visibility": {
            "noaa": 0.06,
            "sg": 0.06
        }
    },
    {
        "airTemperature": {
            "noaa": 1.58,
            "sg": 1.58
        },
        "humidity": {
            "noaa": 97.5,
            "sg": 97.5
        },
        "pressure": {
            "noaa": 1024.7,
            "sg": 1024.7
        },
        "time": "2023-01-22T10:00:00+00:00",
        "visibility": {
            "noaa": 0.16,
            "sg": 0.16
        }
    },
    {
        "airTemperature": {
            "noaa": 1.62,
            "sg": 1.62
        },
        "humidity": {
            "noaa": 97.5,
            "sg": 97.5
        },
        "pressure": {
            "noaa": 1024.79,
            "sg": 1024.79
        },
        "time": "2023-01-22T11:00:00+00:00",
        "visibility": {
            "noaa": 0.26,
            "sg": 0.26
        }
    },
    {
        "airTemperature": {
            "noaa": 1.65,
            "sg": 1.65
        },
        "humidity": {
            "noaa": 97.5,
            "sg": 97.5
        },
        "pressure": {
            "noaa": 1024.89,
            "sg": 1024.89
        },
        "time": "2023-01-22T12:00:00+00:00",
        "visibility": {
            "noaa": 0.35,
            "sg": 0.35
        }
    },
    {
        "airTemperature": {
            "noaa": 1.78,
            "sg": 1.78
        },
        "humidity": {
            "noaa": 97.13,
            "sg": 97.13
        },
        "pressure": {
            "noaa": 1025.58,
            "sg": 1025.58
        },
        "time": "2023-01-22T13:00:00+00:00",
        "visibility": {
            "noaa": 7.12,
            "sg": 7.12
        }
    },
    {
        "airTemperature": {
            "noaa": 1.9,
            "sg": 1.9
        },
        "humidity": {
            "noaa": 96.77,
            "sg": 96.77
        },
        "pressure": {
            "noaa": 1026.27,
            "sg": 1026.27
        },
        "time": "2023-01-22T14:00:00+00:00",
        "visibility": {
            "noaa": 13.89,
            "sg": 13.89
        }
    },
    {
        "airTemperature": {
            "noaa": 2.03,
            "sg": 2.03
        },
        "humidity": {
            "noaa": 96.4,
            "sg": 96.4
        },
        "pressure": {
            "noaa": 1026.96,
            "sg": 1026.96
        },
        "time": "2023-01-22T15:00:00+00:00",
        "visibility": {
            "noaa": 20.65,
            "sg": 20.65
        }
    },
    {
        "airTemperature": {
            "noaa": 1.95,
            "sg": 1.95
        },
        "humidity": {
            "noaa": 96.67,
            "sg": 96.67
        },
        "pressure": {
            "noaa": 1027.74,
            "sg": 1027.74
        },
        "time": "2023-01-22T16:00:00+00:00",
        "visibility": {
            "noaa": 20.87,
            "sg": 20.87
        }
    },
    {
        "airTemperature": {
            "noaa": 1.87,
            "sg": 1.87
        },
        "humidity": {
            "noaa": 96.93,
            "sg": 96.93
        },
        "pressure": {
            "noaa": 1028.52,
            "sg": 1028.52
        },
        "time": "2023-01-22T17:00:00+00:00",
        "visibility": {
            "noaa": 21.08,
            "sg": 21.08
        }
    },
    {
        "airTemperature": {
            "noaa": 1.79,
            "sg": 1.79
        },
        "humidity": {
            "noaa": 97.2,
            "sg": 97.2
        },
        "pressure": {
            "noaa": 1029.3,
            "sg": 1029.3
        },
        "time": "2023-01-22T18:00:00+00:00",
        "visibility": {
            "noaa": 21.29,
            "sg": 21.29
        }
    },
    {
        "airTemperature": {
            "noaa": 1.61,
            "sg": 1.61
        },
        "humidity": {
            "noaa": 97.7,
            "sg": 97.7
        },
        "pressure": {
            "noaa": 1029.93,
            "sg": 1029.93
        },
        "time": "2023-01-22T19:00:00+00:00",
        "visibility": {
            "noaa": 14.59,
            "sg": 14.59
        }
    },
    {
        "airTemperature": {
            "noaa": 1.42,
            "sg": 1.42
        },
        "humidity": {
            "noaa": 98.2,
            "sg": 98.2
        },
        "pressure": {
            "noaa": 1030.56,
            "sg": 1030.56
        },
        "time": "2023-01-22T20:00:00+00:00",
        "visibility": {
            "noaa": 7.89,
            "sg": 7.89
        }
    },
    {
        "airTemperature": {
            "noaa": 1.24,
            "sg": 1.24
        },
        "humidity": {
            "noaa": 98.7,
            "sg": 98.7
        },
        "pressure": {
            "noaa": 1031.2,
            "sg": 1031.2
        },
        "time": "2023-01-22T21:00:00+00:00",
        "visibility": {
            "noaa": 1.19,
            "sg": 1.19
        }
    },
    {
        "airTemperature": {
            "noaa": 1.21,
            "sg": 1.21
        },
        "humidity": {
            "noaa": 98.7,
            "sg": 98.7
        },
        "pressure": {
            "noaa": 1031.49,
            "sg": 1031.49
        },
        "time": "2023-01-22T22:00:00+00:00",
        "visibility": {
            "noaa": 0.92,
            "sg": 0.92
        }
    },
    {
        "airTemperature": {
            "noaa": 1.18,
            "sg": 1.18
        },
        "humidity": {
            "noaa": 98.7,
            "sg": 98.7
        },
        "pressure": {
            "noaa": 1031.78,
            "sg": 1031.78
        },
        "time": "2023-01-22T23:00:00+00:00",
        "visibility": {
            "noaa": 0.66,
            "sg": 0.66
        }
    },
    {
        "airTemperature": {
            "noaa": 1.15,
            "sg": 1.15
        },
        "humidity": {
            "noaa": 98.7,
            "sg": 98.7
        },
        "pressure": {
            "noaa": 1032.08,
            "sg": 1032.08
        },
        "time": "2023-01-23T00:00:00+00:00",
        "visibility": {
            "noaa": 0.4,
            "sg": 0.4
        }
    },
    {
        "airTemperature": {
            "noaa": 1.12,
            "sg": 1.12
        },
        "humidity": {
            "noaa": 98.6,
            "sg": 98.6
        },
        "pressure": {
            "noaa": 1032.16,
            "sg": 1032.16
        },
        "time": "2023-01-23T01:00:00+00:00",
        "visibility": {
            "noaa": 0.31,
            "sg": 0.31
        }
    },
    {
        "airTemperature": {
            "noaa": 1.1,
            "sg": 1.1
        },
        "humidity": {
            "noaa": 98.5,
            "sg": 98.5
        },
        "pressure": {
            "noaa": 1032.25,
            "sg": 1032.25
        },
        "time": "2023-01-23T02:00:00+00:00",
        "visibility": {
            "noaa": 0.22,
            "sg": 0.22
        }
    },
    {
        "airTemperature": {
            "noaa": 1.07,
            "sg": 1.07
        },
        "humidity": {
            "noaa": 98.4,
            "sg": 98.4
        },
        "pressure": {
            "noaa": 1032.34,
            "sg": 1032.34
        },
        "time": "2023-01-23T03:00:00+00:00",
        "visibility": {
            "noaa": 0.13,
            "sg": 0.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.94,
            "sg": 0.94
        },
        "humidity": {
            "noaa": 98.27,
            "sg": 98.27
        },
        "pressure": {
            "noaa": 1032.77,
            "sg": 1032.77
        },
        "time": "2023-01-23T04:00:00+00:00",
        "visibility": {
            "noaa": 0.09,
            "sg": 0.09
        }
    },
    {
        "airTemperature": {
            "noaa": 0.8,
            "sg": 0.8
        },
        "humidity": {
            "noaa": 98.13,
            "sg": 98.13
        },
        "pressure": {
            "noaa": 1033.21,
            "sg": 1033.21
        },
        "time": "2023-01-23T05:00:00+00:00",
        "visibility": {
            "noaa": 0.06,
            "sg": 0.06
        }
    },
    {
        "airTemperature": {
            "noaa": 0.66,
            "sg": 0.66
        },
        "humidity": {
            "noaa": 98,
            "sg": 98
        },
        "pressure": {
            "noaa": 1033.64,
            "sg": 1033.64
        },
        "time": "2023-01-23T06:00:00+00:00",
        "visibility": {
            "noaa": 0.03,
            "sg": 0.03
        }
    },
    {
        "airTemperature": {
            "noaa": 0.68,
            "sg": 0.68
        },
        "humidity": {
            "noaa": 95.57,
            "sg": 95.57
        },
        "pressure": {
            "noaa": 1034.26,
            "sg": 1034.26
        },
        "time": "2023-01-23T07:00:00+00:00",
        "visibility": {
            "noaa": 8.06,
            "sg": 8.06
        }
    },
    {
        "airTemperature": {
            "noaa": 0.69,
            "sg": 0.69
        },
        "humidity": {
            "noaa": 93.13,
            "sg": 93.13
        },
        "pressure": {
            "noaa": 1034.87,
            "sg": 1034.87
        },
        "time": "2023-01-23T08:00:00+00:00",
        "visibility": {
            "noaa": 16.1,
            "sg": 16.1
        }
    },
    {
        "airTemperature": {
            "noaa": 0.71,
            "sg": 0.71
        },
        "humidity": {
            "noaa": 90.7,
            "sg": 90.7
        },
        "pressure": {
            "noaa": 1035.49,
            "sg": 1035.49
        },
        "time": "2023-01-23T09:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.76,
            "sg": 0.76
        },
        "humidity": {
            "noaa": 90.4,
            "sg": 90.4
        },
        "pressure": {
            "noaa": 1035.69,
            "sg": 1035.69
        },
        "time": "2023-01-23T10:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.81,
            "sg": 0.81
        },
        "humidity": {
            "noaa": 90.1,
            "sg": 90.1
        },
        "pressure": {
            "noaa": 1035.9,
            "sg": 1035.9
        },
        "time": "2023-01-23T11:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.87,
            "sg": 0.87
        },
        "humidity": {
            "noaa": 89.8,
            "sg": 89.8
        },
        "pressure": {
            "noaa": 1036.1,
            "sg": 1036.1
        },
        "time": "2023-01-23T12:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.83,
            "sg": 0.83
        },
        "humidity": {
            "noaa": 89.47,
            "sg": 89.47
        },
        "pressure": {
            "noaa": 1036.44,
            "sg": 1036.44
        },
        "time": "2023-01-23T13:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.8,
            "sg": 0.8
        },
        "humidity": {
            "noaa": 89.13,
            "sg": 89.13
        },
        "pressure": {
            "noaa": 1036.78,
            "sg": 1036.78
        },
        "time": "2023-01-23T14:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.76,
            "sg": 0.76
        },
        "humidity": {
            "noaa": 88.8,
            "sg": 88.8
        },
        "pressure": {
            "noaa": 1037.12,
            "sg": 1037.12
        },
        "time": "2023-01-23T15:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": 0.17,
            "sg": 0.17
        },
        "humidity": {
            "noaa": 90.3,
            "sg": 90.3
        },
        "pressure": {
            "noaa": 1037.46,
            "sg": 1037.46
        },
        "time": "2023-01-23T16:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -0.42,
            "sg": -0.42
        },
        "humidity": {
            "noaa": 91.8,
            "sg": 91.8
        },
        "pressure": {
            "noaa": 1037.8,
            "sg": 1037.8
        },
        "time": "2023-01-23T17:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1,
            "sg": -1
        },
        "humidity": {
            "noaa": 93.3,
            "sg": 93.3
        },
        "pressure": {
            "noaa": 1038.14,
            "sg": 1038.14
        },
        "time": "2023-01-23T18:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.16,
            "sg": -1.16
        },
        "humidity": {
            "noaa": 92.87,
            "sg": 92.87
        },
        "pressure": {
            "noaa": 1038.43,
            "sg": 1038.43
        },
        "time": "2023-01-23T19:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.31,
            "sg": -1.31
        },
        "humidity": {
            "noaa": 92.43,
            "sg": 92.43
        },
        "pressure": {
            "noaa": 1038.72,
            "sg": 1038.72
        },
        "time": "2023-01-23T20:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.47,
            "sg": -1.47
        },
        "humidity": {
            "noaa": 92,
            "sg": 92
        },
        "pressure": {
            "noaa": 1039.01,
            "sg": 1039.01
        },
        "time": "2023-01-23T21:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.58,
            "sg": -1.58
        },
        "humidity": {
            "noaa": 91.17,
            "sg": 91.17
        },
        "pressure": {
            "noaa": 1039.14,
            "sg": 1039.14
        },
        "time": "2023-01-23T22:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.7,
            "sg": -1.7
        },
        "humidity": {
            "noaa": 90.33,
            "sg": 90.33
        },
        "pressure": {
            "noaa": 1039.27,
            "sg": 1039.27
        },
        "time": "2023-01-23T23:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.81,
            "sg": -1.81
        },
        "humidity": {
            "noaa": 89.5,
            "sg": 89.5
        },
        "pressure": {
            "noaa": 1039.4,
            "sg": 1039.4
        },
        "time": "2023-01-24T00:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -1.84,
            "sg": -1.84
        },
        "humidity": {
            "noaa": 88.7,
            "sg": 88.7
        },
        "pressure": {
            "noaa": 1039.35,
            "sg": 1039.35
        },
        "time": "2023-01-24T01:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -1.86,
            "sg": -1.86
        },
        "humidity": {
            "noaa": 87.9,
            "sg": 87.9
        },
        "pressure": {
            "noaa": 1039.3,
            "sg": 1039.3
        },
        "time": "2023-01-24T02:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -1.89,
            "sg": -1.89
        },
        "humidity": {
            "noaa": 87.1,
            "sg": 87.1
        },
        "pressure": {
            "noaa": 1039.25,
            "sg": 1039.25
        },
        "time": "2023-01-24T03:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -2.03,
            "sg": -2.03
        },
        "humidity": {
            "noaa": 85.57,
            "sg": 85.57
        },
        "pressure": {
            "noaa": 1039.41,
            "sg": 1039.41
        },
        "time": "2023-01-24T04:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -2.17,
            "sg": -2.17
        },
        "humidity": {
            "noaa": 84.03,
            "sg": 84.03
        },
        "pressure": {
            "noaa": 1039.56,
            "sg": 1039.56
        },
        "time": "2023-01-24T05:00:00+00:00",
        "visibility": {
            "noaa": 24.13,
            "sg": 24.13
        }
    },
    {
        "airTemperature": {
            "noaa": -2.32,
            "sg": -2.32
        },
        "humidity": {
            "noaa": 82.5,
            "sg": 82.5
        },
        "pressure": {
            "noaa": 1039.72,
            "sg": 1039.72
        },
        "time": "2023-01-24T06:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    },
    {
        "airTemperature": {
            "noaa": -1.92,
            "sg": -1.92
        },
        "humidity": {
            "noaa": 79.13,
            "sg": 79.13
        },
        "pressure": {
            "noaa": 1039.91,
            "sg": 1039.91
        },
        "time": "2023-01-24T07:00:00+00:00",
        "visibility": {
            "noaa": 24.14,
            "sg": 24.14
        }
    }
]