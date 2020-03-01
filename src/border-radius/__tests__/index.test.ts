import { borderTopLeftRadius, borderTopRightRadius } from '../index'
import { px } from '../../shared/value-constructors'

test('borderTopLeftRadius(Length<px>)', () => {
  const received = borderTopLeftRadius(px(10))
  const expected = { borderTopLeftRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderTopRightRadius(Length<px>)', () => {
  const received = borderTopRightRadius(px(10))
  const expected = { borderTopRightRadius: '10px' }
  expect(received).toEqual(expected)
})
