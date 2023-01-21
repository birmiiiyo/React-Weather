import { KeyboardEvent } from 'react'

export const noDigits = (event: KeyboardEvent<HTMLElement>) => {
  if ('1234567890!@#$%^&*()_+-='.indexOf(event.key) != -1)
    event.preventDefault()
}
