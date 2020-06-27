import { style } from '../../index'

test('fontOpticalSizing: keyword', () => {
  const received = style({
    fontOpticalSizing: 'auto',
  })
  const expected = {
    fontOpticalSizing: 'auto',
  }
  expect(received).toEqual(expected)
})
