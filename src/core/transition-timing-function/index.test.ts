import { steps } from '.'
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
