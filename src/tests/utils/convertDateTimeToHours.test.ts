import { convertDateTimeToHours } from 'utils/convertDateTimeToHours'

describe('test for convertDateTimeToHours', () => {
  it('Should return 1970 00.00', () => {
    expect(convertDateTimeToHours(new Date(0))).toStrictEqual(
      `0${new Date(0).getHours()}:0${new Date(0).getMinutes()}`,
    )
  })
  it('Should return 2136 20.59', () => {
    expect(convertDateTimeToHours(new Date(5269352395234))).toStrictEqual(
      `${new Date(5269352395234).getHours()}:${new Date(
        5269352395234,
      ).getMinutes()}`,
    )
  })
  it('Should return Invalid Date', () => {
    expect(convertDateTimeToHours(new Date('fsdfs'))).toStrictEqual(
      'Invalid Date',
    )
  })
})
