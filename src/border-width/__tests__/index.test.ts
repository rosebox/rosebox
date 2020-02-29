import { borderTopWidth, borderRightWidth, borderBottomWidth } from '../index'
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

test('borderRightWidth(Length<px>)', () => {
  const received = borderRightWidth(px(30))
  const expected = { borderRightWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderBottomWidth(Length<px>)', () => {
  const received = borderBottomWidth(px(30))
  const expected = { borderBottomWidth: '30px' }
  expect(received).toEqual(expected)
})
