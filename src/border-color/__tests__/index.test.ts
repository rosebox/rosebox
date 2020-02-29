import { borderTopColor } from '../index'
import { rgb } from '../../color/internal'

test('borderTopColor(RGB)', () => {
  const received = borderTopColor(rgb([255, 255, 255]))
  const expected = { borderTopColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})
