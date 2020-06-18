import { style } from '../../index'

test('fontKerning: auto', () => {
  const received = style({
    fontKerning: 'auto',
  })
  const expected = {
    fontKerning: 'auto',
  }
  expect(received).toEqual(expected)
})
