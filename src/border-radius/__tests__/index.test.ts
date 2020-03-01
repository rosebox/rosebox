import { borderTopLeftRadius } from '../index'
import { px } from '../../shared/value-constructors'

test('borderTopLeftRadius(Length<px>)', () => {
  const received = borderTopLeftRadius(px(10))
  const expected = { borderTopLeftRadius: '10px' }
  expect(received).toEqual(expected)
})
