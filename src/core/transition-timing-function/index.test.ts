import { steps } from '../shared'
import { style } from '../..'

test('transitionTimingFunction', () => {
  const received = style({
    transitionTimingFunction: steps(3, 'jump-both'),
  })
  const expected = {
    transitionTimingFunction: 'steps(3, jump-both)',
  }
  expect(received).toEqual(expected)
})
