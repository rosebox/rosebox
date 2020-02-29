import { borderTopWidth } from '../index'
import { px } from '../../shared/value-constructors'

test('borderTopWidth(thick)', () => {
  const received = borderTopWidth('thick')
  const expected = { borderTopWidth: 'thick' }
  expect(received).toEqual(expected)
})

test('borderTopWidth(Length<px>)', () => {
  const received = borderTopWidth(px(30))
  const expected = { borderTopWidth: '30px' }
  expect(received).toEqual(expected)
})
