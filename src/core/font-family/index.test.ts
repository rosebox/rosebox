import { style } from '../..'

test('fontFamily', () => {
  const received = style({
    fontFamily: ['font1', 'font2'],
  })
  const expected = {
    fontFamily: 'font1, font2',
  }
  expect(received).toEqual(expected)
})
