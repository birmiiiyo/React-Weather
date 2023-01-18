import { KeyboardEvent } from 'react'

export const noDigits = (event: KeyboardEvent<HTMLImageElement>) => {
  if ('1234567890'.indexOf(event.key) != -1) event.preventDefault()
}
