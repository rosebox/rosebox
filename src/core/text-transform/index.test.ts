import { style } from '../../index'

test('textTransform: [Keyword, Keyword]', () => {
  const received = style({
    textTransform: ['full-size-kana', 'full-width', 'uppercase'],
  })
  const expected = {
    textTransform: 'full-size-kana full-width uppercase',
  }
  expect(received).toEqual(expected)
})
