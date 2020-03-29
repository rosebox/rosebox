import { letterSpacing } from '../index'
import { px } from '../../shared/value-constructors'

test('letterSpacing(Length<px>)', () => {
  const received = letterSpacing(px(30))
  const expected = { letterSpacing: '30px' }
  expect(received).toEqual(expected)
})

test('letterSpacing(normal', () => {
  const received = letterSpacing('normal')
  const expected = { letterSpacing: 'normal' }
  expect(received).toEqual(expected)
})
