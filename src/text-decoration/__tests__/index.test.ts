import { textDecorationLine } from '../index'

test('textDecorationLine(line-through blink overline underline)', () => {
  const received = textDecorationLine('line-through blink overline underline')
  const expected = {
    textDecorationLine: 'line-through blink overline underline'
  }
  expect(received).toEqual(expected)
})
