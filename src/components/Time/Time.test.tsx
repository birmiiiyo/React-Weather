import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@tests'
import { Clock } from './index'

describe('Clock component', () => {
  it('render clock', () => {
    const { findByText } = render(<Clock />)
    const hours = findByText('15:26')
    expect(hours).toBeInTheDocument()
  })
})
