import '@testing-library/jest-dom'

import React from 'react'

import { render, screen } from 'tests'

import { Calendar } from './index'

describe('Calendar without localStorage', () => {
  it('render Calendar without login', async () => {
    render(<Calendar />)
    expect(await screen.findByText(/Login to view events/i)).toBeInTheDocument()
  })
})
