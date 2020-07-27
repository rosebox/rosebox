import { style } from '../../index'

test('backfaceVisibility: hidden', () => {
  const received = style({
    backfaceVisibility: 'hidden',
  })
  const expected = {
    backfaceVisibility: 'hidden',
  }
  expect(received).toEqual(expected)
})
