import '@testing-library/jest-dom'

import React from 'react'

import { render, screen } from 'tests'
import { convertDateTimeToHours } from 'utils/convertDateTimeToHours'

import { Clock } from './index'

describe('Clock component', () => {
  it('render clock', async () => {
    render(<Clock />)
    expect(screen.getByText(/2023/i)).toBeInTheDocument()
    expect(screen.getByText(convertDateTimeToHours(new Date()))).toHaveStyle(
      'font-size:32px',
    )
  })
})
