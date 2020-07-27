import { ms } from '../shared'
import { style } from '../..'
import { steps } from '../transition-timing-function'

test('transition', () => {
  const received = style({
    transition: [steps(3, 'jump-both'), ms(1000)],
  })
  const expected = {
    transition: 'steps(3, jump-both) 1000ms',
  }
  expect(received).toEqual(expected)
})
