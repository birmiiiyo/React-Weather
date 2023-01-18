import { filterPerFourHour } from './helpers'

describe('Filter array', () => {
  it('Should return 6 elements(with 24)', () => {
    expect(filterPerFourHour(Array(24).fill(''))).toStrictEqual(
      Array(6).fill('')
    )
  })
  it('Should return 13 elements', () => {
    expect(filterPerFourHour(Array(51).fill(''))).toStrictEqual(
      Array(13).fill('')
    )
  })
  it('Should return 3 elements', () => {
    expect(filterPerFourHour(Array(11).fill(''))).toStrictEqual(
      Array(3).fill('')
    )
  })
  it('Should return 100 elements', () => {
    expect(filterPerFourHour(Array(400).fill(''))).toStrictEqual(
      Array(100).fill('')
    )
  })
  it('Should return 0 elements', () => {
    expect(filterPerFourHour(Array(0).fill(''))).toStrictEqual(
      Array(0).fill('')
    )
  })
})
