import { ms } from '../shared'
import { style } from '../..'
import { steps } from '../shared'

test('transition', () => {
  const received = style({
    transition: [steps(3, 'jump-both'), ms(1000)],
  })
  const expected = {
    transition: 'steps(3, jump-both) 1000ms',
  }
  expect(received).toEqual(expected)
})

test('transition', () => {
  const received = style({
    transition: ['backgroundColor', ms(1000)],
  })
  const expected = {
    transition: 'background-color 1000ms',
  }
  expect(received).toEqual(expected)
})
