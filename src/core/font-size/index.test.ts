import { style } from '../..'
import { rem } from '../shared'

test('fontSize', () => {
  const received = style({
    fontSize: rem(2),
  })
  const expected = {
    fontSize: '2rem',
  }
  expect(received).toEqual(expected)
})
