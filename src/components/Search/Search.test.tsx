import '@testing-library/jest-dom'

import React from 'react'

import { fireEvent, render } from 'tests'

import { Search } from './index'

describe('Search component', () => {
  it('render Search', () => {
    const { getByPlaceholderText } = render(<Search />)
    const Input = getByPlaceholderText('Search for city...')
    expect(Input).toBeInTheDocument()
  })
  it('change input value', () => {
    const { getByPlaceholderText } = render(<Search />)
    const Input = getByPlaceholderText('Search for city...')
    expect(Input).not.toHaveFocus()
    fireEvent.change(Input, {
      target: { value: 'London' },
    })
    expect(Input).toHaveValue('London')
  })
  it('check focus', () => {
    const { getByPlaceholderText } = render(<Search />)
    const Input = getByPlaceholderText('Search for city...')
    expect(Input).not.toHaveFocus()
    Input.focus()
    expect(Input).toHaveFocus()
  })
})
