import '@testing-library/jest-dom'

import React from 'react'

import { fireEvent, render } from 'tests'

import { Weather } from './index'

describe('Weather component', () => {
  it('change hourly/daily', () => {
    const { getByText } = render(<Weather />)
    const daily = getByText(/daily/i)
    const hourly = getByText(/hourly/i)
    expect(daily).toBeInTheDocument()
    expect(hourly).toBeInTheDocument()
    expect(daily).toBeDisabled()
    expect(hourly).not.toBeDisabled()
    fireEvent.click(hourly)
    expect(hourly).toBeDisabled()
    expect(daily).not.toBeDisabled()
  })
  it('active daily', () => {
    const { getByText } = render(<Weather />)
    const daily = getByText(/daily/i)
    const day = getByText(/day/i)
    expect(daily).toBeInTheDocument()
    expect(daily).toBeDisabled()
    expect(day).toBeInTheDocument()
    fireEvent.click(day)
    expect(day).not.toBeInTheDocument()
  })
})
