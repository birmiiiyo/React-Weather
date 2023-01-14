import ApiCalendar from 'react-google-calendar-api'

const config = {
  clientId: '57154253167-0u2mb0kjfec22qgt1e5mg23uf20u0gvo.apps.googleusercontent.com',
  apiKey: `${process.env.GOOGLE_CALENDAR_API_key}`,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
}

export const apiCalendar = new ApiCalendar(config)