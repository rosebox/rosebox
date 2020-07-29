import { style } from '../..'

test('animationPlayState', () => {
  const received = style({
    animationPlayState: 'running',
  })
  const expected = {
    animationPlayState: 'running',
  }
  expect(received).toEqual(expected)
})

test('animationPlayState', () => {
  const received = style({
    animationPlayState: ['running', 'paused', 'running'],
  })
  const expected = {
    animationPlayState: 'running, paused, running',
  }
  expect(received).toEqual(expected)
})
