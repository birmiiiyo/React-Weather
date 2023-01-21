import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@tests'
import { Calendar } from './index'

describe('Calendar without localStorage', () => {
  it('render Calendar', () => {
    const { findByText } = render(<Calendar />)
    const initialText = findByText(/Login to view events/i)
    expect(initialText).toBeInTheDocument()
  })
})
