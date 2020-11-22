import { style } from '../..'
import { hsl, per } from '../shared'

test('outlineColor', () => {
  const received = style({
    outlineColor: hsl(3, per(3), per(3))
  })
  const expected = {
    outlineColor: 'hsl(3, 3%, 3%)',
  }
  expect(received).toEqual(expected)
})
