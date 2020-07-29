import { style } from '../..'

test('animationFillMode', () => {
  const received = style({
    animationFillMode: 'forwards',
  })
  const expected = {
    animationFillMode: 'forwards',
  }
  expect(received).toEqual(expected)
})

test('animationFillMode', () => {
  const received = style({
    animationFillMode: ['forwards', 'backwards', 'backwards'],
  })
  const expected = {
    animationFillMode: 'forwards, backwards, backwards',
  }
  expect(received).toEqual(expected)
})
