import { style } from '../../index'

test('fontStyle: keyword', () => {
  const received = style({
    fontStyle: 'oblique',
  })
  const expected = {
    fontStyle: 'oblique',
  }
  expect(received).toEqual(expected)
})
