import { style } from '../..'
import { per } from '../shared'

test('width', () => {
  const received = style({
    width: per(3),
  })
  const expected = {
    width: '3%',
  }
  expect(received).toEqual(expected)
})
