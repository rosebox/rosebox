import { ms } from '../shared'
import { style } from '../..'

test('transitionDuration', () => {
  const received = style({
    transitionDuration: ms(500),
  })
  const expected = {
    transitionDuration: '500ms',
  }
  expect(received).toEqual(expected)
})
