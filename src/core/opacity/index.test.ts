import { style } from '../../index'

test('opacity: number', () => {
  const received = style({
    opacity: 1,
  })
  const expected = {
    opacity: 1,
  }
  expect(received).toEqual(expected)
})
