export const convertDateTimeToHours = (time: Date): string =>
  new Date(time).toString().slice(16, 21)
