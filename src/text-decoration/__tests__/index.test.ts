import { textDecorationLine } from '../index'

test('textAlign(match-parent)', () => {
  const received = textDecorationLine('line-through blink overline underline')
  const expected = {
    textDecorationLine: 'line-through blink overline underline'
  }
  expect(received).toEqual(expected)
})
