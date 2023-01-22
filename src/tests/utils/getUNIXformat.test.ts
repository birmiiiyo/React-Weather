import { getUNIXformat } from '@utils/getUNIXformat'

describe('test for getUNIXformat', () => {
  it('Should return current time ', () => {
    expect(getUNIXformat(new Date(0).toString())).toStrictEqual(
      new Date(0).getDate()
    )
  })
})
