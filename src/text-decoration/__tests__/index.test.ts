import { textDecorationLine, textDecorationColor } from '../index'
import { rgb } from '../../color/internal'

test('textDecorationLine(line-through blink overline underline)', () => {
  const received = textDecorationLine('line-through blink overline underline')
  const expected = {
    textDecorationLine: 'line-through blink overline underline'
  }
  expect(received).toEqual(expected)
})

test('textDecorationColor(RGB)', () => {
  const received = textDecorationColor(rgb([255, 255, 255]))
  const expected = {
    textDecorationColor: 'rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})
