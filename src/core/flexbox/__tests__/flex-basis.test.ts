import { flexBasis } from '../flex-basis'
import { per, px } from '../../shared/value-constructors'

test('flexBasis() with pixels', () => {
  const received = flexBasis(px(2))
  const expected = { flexBasis: '2px' }
  expect(received).toEqual(expected)
})

test('flexBasis() with percentage', () => {
  const received = flexBasis(per(20))
  const expected = { flexBasis: '20%' }
  expect(received).toEqual(expected)
})

test('flexBasis() with keyword', () => {
  const received = flexBasis('auto')
  const expected = { flexBasis: 'auto' }
  expect(received).toEqual(expected)
})
