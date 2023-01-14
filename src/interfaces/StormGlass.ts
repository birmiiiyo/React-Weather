export interface StormGlass {
    hours: Hour[];
    meta: Meta;
}
export interface Hour {
    airTemperature: AirTemperature;
    time: Date;
}
export interface AirTemperature {
    noaa: number;
    sg: number;
}
export interface Meta {
    cost: number;
    dailyQuota: number;
    end: string;
    lat: number;
    lng: number;
    params: string[];
    requestCount: number;
    start: string;
}