import { style } from '../..'

test('animationPlayMode', () => {
  const received = style({
    animationPlayMode: 'running',
  })
  const expected = {
    animationPlayMode: 'running',
  }
  expect(received).toEqual(expected)
})

test('animationPlayMode', () => {
  const received = style({
    animationPlayMode: ['running', 'paused', 'running'],
  })
  const expected = {
    animationPlayMode: 'running, paused, running',
  }
  expect(received).toEqual(expected)
})
