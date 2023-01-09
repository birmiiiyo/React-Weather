export interface ITime {
    abbreviation: string;
    client_ip: string;
    datetime: Date;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from?: string;
    dst_offset: number;
    dst_until?: string;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: Date;
    utc_offset: string;
    week_number: number;
}