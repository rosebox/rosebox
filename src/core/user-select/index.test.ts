import { style } from '../..'

test('userSelect: Keyword', () => {
  const received = style({
    userSelect: 'contain',
  })
  const expected = {
    userSelect: 'contain',
  }
  expect(received).toEqual(expected)
})
