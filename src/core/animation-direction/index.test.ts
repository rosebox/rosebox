import { style } from '../..'

test('animationDirection', () => {
  const received = style({
    animationDirection: 'reverse',
  })
  const expected = {
    animationDirection: 'reverse',
  }
  expect(received).toEqual(expected)
})

test('animationDirection', () => {
  const received = style({
    animationDirection: ['reverse', 'normal'],
  })
  const expected = {
    animationDirection: 'reverse, normal',
  }
  expect(received).toEqual(expected)
})
