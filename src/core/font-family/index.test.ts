import { style } from '../../..'

test('fontFamily', () => {
  const received = style({
    fontFamily: 'Arial',
  })
  const expected = {
    fontFamily: 'Arial',
  }
  expect(received).toEqual(expected)
})
