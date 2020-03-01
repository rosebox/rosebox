import {
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius
} from '../index'
import { px } from '../../shared/value-constructors'

test('borderTopRightRadius(Length<px>)', () => {
  const received = borderTopRightRadius(px(10))
  const expected = { borderTopRightRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderBottomRightRadius(Length<px>)', () => {
  const received = borderBottomRightRadius(px(10))
  const expected = { borderBottomRightRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderTopLeftRadius(Length<px>)', () => {
  const received = borderTopLeftRadius(px(10))
  const expected = { borderTopLeftRadius: '10px' }
  expect(received).toEqual(expected)
})
