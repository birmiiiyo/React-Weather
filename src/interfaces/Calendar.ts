export interface IEventState {
  items: IEventItem[]
  isSynchronize: boolean
}

export interface IEventsListResponse {
  result: {
    items: IEventItem[]
  }
}

export interface IEventItem {
  created: string
  creator: {
    email: string
    self: true
  }
  end: {
    dateTime: string
    timeZone: string
  }
  htmlLink: string
  start: {
    dateTime: string
    timeZone: string
  }
  summary: string
}
