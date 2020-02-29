import { borderTopColor, borderRightColor } from '../index'
import { rgb } from '../../color/internal'

test('borderTopColor(RGB)', () => {
  const received = borderTopColor(rgb([255, 255, 255]))
  const expected = { borderTopColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderRightColor(RGB)', () => {
  const received = borderRightColor(rgb([255, 255, 255]))
  const expected = { borderRightColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})
