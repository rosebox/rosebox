import { style } from '../..'

test('animationIterationCount', () => {
  const received = style({
    animationIterationCount: 2,
  })
  const expected = {
    animationIterationCount: 2,
  }
  expect(received).toEqual(expected)
})

test('animationIterationCount', () => {
  const received = style({
    animationIterationCount: ['infinit', 2],
  })
  const expected = {
    animationIterationCount: 'infinit, 2',
  }
  expect(received).toEqual(expected)
})
