import { getUNIXformat } from 'utils/getUNIXformat'

describe('test for getUNIXformat', () => {
  it('Should return start time ', () => {
    expect(getUNIXformat(new Date(0).toString())).toStrictEqual(
      new Date(0).getTime(),
    )
  })
  it('Should return  time at Tue Jan 24 2023 09:49:52', () => {
    expect(getUNIXformat('Tue Jan 24 2023 09:49:52 GMT+0000')).toStrictEqual(
      new Date('Tue Jan 24 2023 09:49:52 GMT+0000').getTime(),
    )
  })
})
