import { top, right, bottom } from '../internal'
import { px, per } from '../../shared/value-constructors'

test('top(x: Length)', () => {
  const received = top(px(2))
  const expected = { top: '2px' }
  expect(received).toEqual(expected)
})

test('right(x: Length)', () => {
  const received = right(px(2))
  const expected = { right: '2px' }
  expect(received).toEqual(expected)
})

test('bottom(x: Percentage)', () => {
  const received = bottom(per(20))
  const expected = { bottom: '20%' }
  expect(received).toEqual(expected)
})
