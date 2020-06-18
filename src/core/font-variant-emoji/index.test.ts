import { style } from '../../index'

test('fontVariantEmoji: auto', () => {
  const received = style({
    fontVariantEmoji: 'emoji',
  })
  const expected = {
    fontVariantEmoji: 'emoji',
  }
  expect(received).toEqual(expected)
})
