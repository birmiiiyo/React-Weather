import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@tests'
import { Clock } from './index'
import { convertDateTimeToHours } from '@utils/convertDateTimeToHours'

describe('Clock component', () => {
  it('render clock', async () => {
    render(<Clock />)
    expect(screen.getByText(/2023/i)).toBeInTheDocument()
    expect(screen.getByText(convertDateTimeToHours(new Date()))).toHaveStyle(
      'font-size:32px'
    )
  })
})
